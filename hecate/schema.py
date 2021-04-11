import graphene
import graphql_jwt

import kali.schema
import users.schema


class Query(
    kali.schema.Query,
    users.schema.Query,
    graphene.ObjectType
):
    pass


class Mutation(
    kali.schema.Mutation,
    users.schema.Mutation,
    graphene.ObjectType
):
    # token_auth is used to authenticate the User with it's username 
    # and password to obtain the JWT.
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    # verify_token is used to confirm that the token is valid, 
    # passing it as an argument.
    verify_token = graphql_jwt.Verify.Field()
    # refresh_token is used to *obtain a new token* within the 
    # renewed expiration time for non-expired tokens, if they
    # are enabled to expire.
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
