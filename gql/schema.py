import graphene

# this is referenced in hecate/settings.py
schema = graphene.Schema(query=Query)
