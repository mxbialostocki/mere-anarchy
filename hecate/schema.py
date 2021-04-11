import graphene
from kali.models import Record
from graphene_django.types import DjangoObjectType


# api Record Model
class RecordType(DjangoObjectType):
    id = graphene.ID()
    title = graphene.String()
    author = graphene.String()
    created_at = graphene.Date()

    class Meta:
        model = Record
        fields = ("id", "title", "author", "created_at")

    def resolve_id(self, info):
        return self.id

    def resolve_title(self, info):
        return self.title

    def resolve_author(self, info):
        return self.author


class Query(graphene.ObjectType):
    record_list = graphene.List(RecordType)
    record_by_id = graphene.Field(RecordType, id=graphene.ID(required=True))

    def resolve_record_list(self, info, *_):
        return Record.objects.all().only("title", "author")

    def resolve_record(self, info, id):
        try:
            return Record.ogjects.get(id=id)
        except Record.DoesNotExist:
            return None


class RecordCreate(graphene.Mutation):
    id = graphene.ID()
    title = graphene.String()
    author = graphene.String()

    class Arguments:
        title = graphene.String()
        author = graphene.String()
    
    def mutate(self, info, title, author):
        record = Record(title=title, author=author)
        record.save()

        return CreateRecord(
            id=record.id,
            title=record.title,
            author=record.author
        )


class RecordMutation(graphene.Mutation):
    class Arguments:
        # assert arguments for this mutation type
        id = graphene.ID()
        title = graphene.String(required=True)
        author = graphene.String(required=True)

    # The class attributes define the response of the mutation
    record = graphene.Field(RecordType)

    @classmethod
    def mutate(cls, root, info, id, title, author):
        record = Record.objects.get(pk=id)
        record.title = title
        record.author = author
        record.save()
        return RecordMutation(record=record)


class Mutation(graphene.ObjectType):
    create_record = RecordCreate.Field()
    update_record = RecordMutation.Field()


# this is referenced in hecate/settings.py
schema = graphene.Schema(query=Query, mutation=Mutation)
