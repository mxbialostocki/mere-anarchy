import graphene

import kali.schema


class Query(
    kali.schema.Query,
    graphene.ObjectType
):
    pass


class Mutation(
    kali.schema.Mutation,
    graphene.ObjectType
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
