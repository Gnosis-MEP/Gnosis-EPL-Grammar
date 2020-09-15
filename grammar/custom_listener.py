from grammar.GnosisEPLListener import GnosisEPLListener

class CustomEPLListener(GnosisEPLListener):

    def __init__(self):
        self.reset()

    def reset(self):
        self.data_map = dict()

    def enterQuery_name(self, ctx):
        print(ctx.getText())

    def enterOutput_type(self, ctx):
        print(ctx.getText())

    def enterContent_service(self, ctx):
        print(ctx.getText())

    def enterObject_type(self, ctx):
        print(ctx.getText())

    def enterRelationship(self, ctx):
        print(ctx.getText())

    def enterCondition_clause(self, ctx):
        print(ctx.logical_operator())
        ctx2 = ctx.condition()[0]
        print()

    def enterCondition(self, ctx):
        print(ctx.getText())

    def enterPublisher(self, ctx):
        print(ctx.getText())

    def enterWindow(self, ctx):
        print(ctx.getText())

    def enterMetric(self, ctx):
        print(ctx.getText())

    def enterNode(self, ctx):
        print(ctx.getText())