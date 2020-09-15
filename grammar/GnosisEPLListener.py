# Generated from GnosisEPL.g4 by ANTLR 4.8
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .GnosisEPLParser import GnosisEPLParser
else:
    from grammar.GnosisEPLParser import GnosisEPLParser

# This class defines a complete listener for a parse tree produced by GnosisEPLParser.
class GnosisEPLListener(ParseTreeListener):

    # Enter a parse tree produced by GnosisEPLParser#alphanumeric.
    def enterAlphanumeric(self, ctx:GnosisEPLParser.AlphanumericContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#alphanumeric.
    def exitAlphanumeric(self, ctx:GnosisEPLParser.AlphanumericContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#comparison_operator.
    def enterComparison_operator(self, ctx:GnosisEPLParser.Comparison_operatorContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#comparison_operator.
    def exitComparison_operator(self, ctx:GnosisEPLParser.Comparison_operatorContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#query.
    def enterQuery(self, ctx:GnosisEPLParser.QueryContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#query.
    def exitQuery(self, ctx:GnosisEPLParser.QueryContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#subcription.
    def enterSubcription(self, ctx:GnosisEPLParser.SubcriptionContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#subcription.
    def exitSubcription(self, ctx:GnosisEPLParser.SubcriptionContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#query_name.
    def enterQuery_name(self, ctx:GnosisEPLParser.Query_nameContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#query_name.
    def exitQuery_name(self, ctx:GnosisEPLParser.Query_nameContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#output_type.
    def enterOutput_type(self, ctx:GnosisEPLParser.Output_typeContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#output_type.
    def exitOutput_type(self, ctx:GnosisEPLParser.Output_typeContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#separator.
    def enterSeparator(self, ctx:GnosisEPLParser.SeparatorContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#separator.
    def exitSeparator(self, ctx:GnosisEPLParser.SeparatorContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#content.
    def enterContent(self, ctx:GnosisEPLParser.ContentContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#content.
    def exitContent(self, ctx:GnosisEPLParser.ContentContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#content_service.
    def enterContent_service(self, ctx:GnosisEPLParser.Content_serviceContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#content_service.
    def exitContent_service(self, ctx:GnosisEPLParser.Content_serviceContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#object_list.
    def enterObject_list(self, ctx:GnosisEPLParser.Object_listContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#object_list.
    def exitObject_list(self, ctx:GnosisEPLParser.Object_listContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#object_type.
    def enterObject_type(self, ctx:GnosisEPLParser.Object_typeContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#object_type.
    def exitObject_type(self, ctx:GnosisEPLParser.Object_typeContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#object_ref.
    def enterObject_ref(self, ctx:GnosisEPLParser.Object_refContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#object_ref.
    def exitObject_ref(self, ctx:GnosisEPLParser.Object_refContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#object_class.
    def enterObject_class(self, ctx:GnosisEPLParser.Object_classContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#object_class.
    def exitObject_class(self, ctx:GnosisEPLParser.Object_classContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#match_clause.
    def enterMatch_clause(self, ctx:GnosisEPLParser.Match_clauseContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#match_clause.
    def exitMatch_clause(self, ctx:GnosisEPLParser.Match_clauseContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#relationship.
    def enterRelationship(self, ctx:GnosisEPLParser.RelationshipContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#relationship.
    def exitRelationship(self, ctx:GnosisEPLParser.RelationshipContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#object_ref_with_braces.
    def enterObject_ref_with_braces(self, ctx:GnosisEPLParser.Object_ref_with_bracesContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#object_ref_with_braces.
    def exitObject_ref_with_braces(self, ctx:GnosisEPLParser.Object_ref_with_bracesContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#rel_type.
    def enterRel_type(self, ctx:GnosisEPLParser.Rel_typeContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#rel_type.
    def exitRel_type(self, ctx:GnosisEPLParser.Rel_typeContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#query_operator.
    def enterQuery_operator(self, ctx:GnosisEPLParser.Query_operatorContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#query_operator.
    def exitQuery_operator(self, ctx:GnosisEPLParser.Query_operatorContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#logical_operator.
    def enterLogical_operator(self, ctx:GnosisEPLParser.Logical_operatorContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#logical_operator.
    def exitLogical_operator(self, ctx:GnosisEPLParser.Logical_operatorContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#condition_clause.
    def enterCondition_clause(self, ctx:GnosisEPLParser.Condition_clauseContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#condition_clause.
    def exitCondition_clause(self, ctx:GnosisEPLParser.Condition_clauseContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#condition.
    def enterCondition(self, ctx:GnosisEPLParser.ConditionContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#condition.
    def exitCondition(self, ctx:GnosisEPLParser.ConditionContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#attribute_name.
    def enterAttribute_name(self, ctx:GnosisEPLParser.Attribute_nameContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#attribute_name.
    def exitAttribute_name(self, ctx:GnosisEPLParser.Attribute_nameContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#attribute_value.
    def enterAttribute_value(self, ctx:GnosisEPLParser.Attribute_valueContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#attribute_value.
    def exitAttribute_value(self, ctx:GnosisEPLParser.Attribute_valueContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#publisher.
    def enterPublisher(self, ctx:GnosisEPLParser.PublisherContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#publisher.
    def exitPublisher(self, ctx:GnosisEPLParser.PublisherContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#window.
    def enterWindow(self, ctx:GnosisEPLParser.WindowContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#window.
    def exitWindow(self, ctx:GnosisEPLParser.WindowContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#window_type.
    def enterWindow_type(self, ctx:GnosisEPLParser.Window_typeContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#window_type.
    def exitWindow_type(self, ctx:GnosisEPLParser.Window_typeContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#window_size.
    def enterWindow_size(self, ctx:GnosisEPLParser.Window_sizeContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#window_size.
    def exitWindow_size(self, ctx:GnosisEPLParser.Window_sizeContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#window_length.
    def enterWindow_length(self, ctx:GnosisEPLParser.Window_lengthContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#window_length.
    def exitWindow_length(self, ctx:GnosisEPLParser.Window_lengthContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#sliding_length.
    def enterSliding_length(self, ctx:GnosisEPLParser.Sliding_lengthContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#sliding_length.
    def exitSliding_length(self, ctx:GnosisEPLParser.Sliding_lengthContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#metric_list.
    def enterMetric_list(self, ctx:GnosisEPLParser.Metric_listContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#metric_list.
    def exitMetric_list(self, ctx:GnosisEPLParser.Metric_listContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#metric.
    def enterMetric(self, ctx:GnosisEPLParser.MetricContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#metric.
    def exitMetric(self, ctx:GnosisEPLParser.MetricContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#metric_name.
    def enterMetric_name(self, ctx:GnosisEPLParser.Metric_nameContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#metric_name.
    def exitMetric_name(self, ctx:GnosisEPLParser.Metric_nameContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#metric_value.
    def enterMetric_value(self, ctx:GnosisEPLParser.Metric_valueContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#metric_value.
    def exitMetric_value(self, ctx:GnosisEPLParser.Metric_valueContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#node_list.
    def enterNode_list(self, ctx:GnosisEPLParser.Node_listContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#node_list.
    def exitNode_list(self, ctx:GnosisEPLParser.Node_listContext):
        pass


    # Enter a parse tree produced by GnosisEPLParser#node.
    def enterNode(self, ctx:GnosisEPLParser.NodeContext):
        pass

    # Exit a parse tree produced by GnosisEPLParser#node.
    def exitNode(self, ctx:GnosisEPLParser.NodeContext):
        pass



del GnosisEPLParser