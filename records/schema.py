import graphene
from django.db.models import Q
from graphene_django import DjangoObjectType
from graphql import GraphQLError

from records.models import Record, Read

from users.schema import UserType


class RecordType(DjangoObjectType):
    class Meta:
        model = Record


class ReadType(DjangoObjectType):
    class Meta:
        model = Read


class Query(graphene.ObjectType):
    record_list = graphene.List(RecordType, search=graphene.String())
    read_list = graphene.List(ReadType)
    record_by_id = graphene.Field(RecordType, id=graphene.ID(required=True))

    def resolve_record_list(self, info, search=None, **kwargs):
        if search:
            filter = (
                Q(title__icontains=search) | 
                Q(author__icontains=search)
            )
            return Record.objects.filter(filter)

        return Record.objects.all().only("title", "author")

    def resolve_read_list(self, info, **kwargs):
        return Read.objects.all()

    def resolve_record_by_id(self, info, id=None, **kwargs):

        try:
            return Record.objects.get(id=id)
        except Record.DoesNotExist:
            return None


class CreateRecord(graphene.Mutation):
    id = graphene.ID()
    title = graphene.String()
    author = graphene.String()
    posted_by = graphene.Field(UserType)

    class Arguments:
        title = graphene.String()
        author = graphene.String()

    def mutate(self, info, title, author):
        user = info.context.user or None

        record = Record(
            title=title,
            author=author,
            posted_by=user,
        )
        record.save()

        return CreateRecord(
            id=record.id,
            title=record.title,
            author=record.author,
            posted_by=record.posted_by,
        )


class CreateRead(graphene.Mutation):
    user = graphene.Field(UserType)
    record = graphene.Field(RecordType)

    class Arguments:
        record_id = graphene.ID()

    def mutate(self, info, record_id):
        user = info.context.user
        if user.is_anonymous:
            raise GraphQLError('You must be logged in to log reads!')

        record = Record.objects.filter(id=record_id).first()
        if not record:
            raise Exception('Invalid record!')

        Read.objects.create(
            user=user,
            record=record,
        )

        return CreateRead(user=user, record=record)


class Mutation(graphene.ObjectType):
    create_record = CreateRecord.Field()
    create_read = CreateRead.Field()
