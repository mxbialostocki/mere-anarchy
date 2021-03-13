import graphene
from kali.models import Book
from graphene_django.types import DjangoObjectType


# api Book Model
class BookType(DjangoObjectType):
    id = graphene.ID()
    title = graphene.String()
    author = graphene.String()
    created_at = graphene.Date()

    class Meta:
        model = Book

    def resolve_id(self, info):
        return self.id

    def resolve_title(self, info):
        return self.title

    def resolve_author(self, info):
        return self.author


class Query(graphene.ObjectType):
    book_list = graphene.List(BookType)
    book = graphene.Field(BookType, slug=graphene.String())

    def resolve_book_list(self, info, *_):
        return Book.objects.all().only("title", "author")

    def resolve_book(self, info, slug):
        book_queryset = Book.objects.filter(slug=slug)
        if book_queryset.exists():
            return book_queryset.first()


# this is referenced in hecate/settings.py
schema = graphene.Schema(query=Query)
