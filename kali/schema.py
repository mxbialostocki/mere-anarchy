import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError

from kali.models import Record


class RecordType(DjangoObjectType):
    class Meta:
        model = Record


class Query(graphene.ObjectType):
    record_list = graphene.List(RecordType)
    record_by_id = graphene.Field(RecordType, id=graphene.ID(required=True))

    def resolve_record_list(self, info, **kwargs):
        return Record.objects.all().only("title", "author")

    def resolve_record(self, info, **kwargs):
        try:
            return Record.objects.get(id=id)
        except Record.DoesNotExist:
            return None


class CreateRecord(graphene.Mutation):
    id = graphene.ID()
    title = graphene.String()
    author = graphene.String()

    class Arguments:
        title = graphene.String()
        author = graphene.String()

    def mutate(self, info, title, author):
        record = Record(
            title=title,
            author=author
        )
        record.save()

        return CreateRecord(
            id=record.id,
            title=record.title,
            author=record.author
        )


class Mutation(graphene.ObjectType):
    create_record = CreateRecord.Field()
