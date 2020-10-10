from grammar.GnosisEPLListener import GnosisEPLListener

class CustomEPLListener(GnosisEPLListener):

    def __init__(self):
        self.reset()

    def reset(self):
        self.data_map = dict()

    def enterQuery_name(self, ctx):
        print(ctx.getText())

    def enterOutput(self, ctx):
        print(ctx.getText())

    def enterContent_service(self, ctx):
        print(ctx.getText())

    def enterObject_type(self, ctx):
        print(ctx.getText())

    def enterMatch_clause(self, ctx):
        print(ctx.getText())

    def enterWhere_clause(self, ctx):
        print(ctx.getText())

    def enterPublisher(self, ctx):
        print(ctx.getText())

    def enterWindow(self, ctx):
        print(ctx.getText())

    def enterRelationship(self, ctx):
        print(ctx.getText())

    def enterNode(self, ctx):
        print(ctx.getText())