grammar GnosisEPL;
/*
 * Lexer Rules
 */

fragment A :	'a' | 'A';
fragment B :	'b' | 'B';
fragment C :	'c' | 'C';
fragment D :	'd' | 'D';
fragment E :	'e' | 'E';
fragment F :	'f' | 'F';
fragment G :	'g' | 'G';
fragment H :	'h' | 'H';
fragment I :	'i' | 'I';
fragment J :	'j' | 'J';
fragment K :	'k' | 'K';
fragment L :	'l' | 'L';
fragment M :	'm' | 'M';
fragment N :	'n' | 'N';
fragment O :	'o' | 'O';
fragment P :	'p' | 'P';
fragment Q :	'q' | 'Q';
fragment R :	'r' | 'R';
fragment S :	's' | 'S';
fragment T :	't' | 'T';
fragment U :	'u' | 'U';
fragment V :	'v' | 'V';
fragment W :	'w' | 'W';
fragment X :	'x' | 'X';
fragment Y :	'y' | 'Y';
fragment Z :	'z' | 'Z';

SEMI	: ';' ;
COLON	: ':' ;
DOT	: '.' ;
COMMA	: ',' ;
ASTERISK: '*' ;
RPAREN	: ')' ;
LPAREN	: '(' ;
RBRACK	: ']' ;
LBRACK	: '[' ;
RCURLY	: '}' ;
LCURLY	: '{' ;
PLUS	: '+' ;
//HYPHEN	: '-' ;
//LEFT_ARROW	: '<-' ;
//RIGHT_ARROW	: '->' ;
NEGATION: '~' ;
VERTBAR	: '|' ;
BITAND	: '&' ;
POWER_OP: '^' ;
GTH : '>' ;
GTHE	: '>=' ;
LTH : '<' ;
LTHE : '<=' ;
EQUAL : '=' ;
DIFFERENT : '<>' ;
UNDERSCORE : '_' ;

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;
fragment DIGIT : [0-9] ;

REGISTER : R E G I S T E R ;
QUERY : Q U E R Y ;
OUTPUT : O U T P U T ;
CONTENT : C O N T E N T ;
SELECT : S E L E C T ;
MATCH : M A T C H ;
LEFT : L E F T ;
RIGHT : R I G H T ;
BACK : B A C K ;
FRONT : F R O N T ;
AND : A N D ;
OR : O R ;
FROM                : F R O M;
WHERE               : W H E R E;
WITHIN : W I T H I N ;
WITH_QOS : W I T H UNDERSCORE Q O S ;
RETURN : R E T U R N ;
OPTIONAL : O P T I O N A L ;

NUMBER              : DIGIT+ ;

WORD                : (LOWERCASE | UPPERCASE | '_')+ ;

WHITESPACE          : (' ' | '\t') ;

NEWLINE             : ('\r'? '\n' | '\r')+ ;

EVERYTHING          : '?(.*)' ;

/*
 * Parser Rules
 */
alphanumeric : ( WORD | NUMBER )+ ;

comparison_operator : (EQUAL | DIFFERENT | GTH | GTHE | LTH | LTHE ) ;

query : subcription + EOF ;

subcription  : REGISTER WHITESPACE QUERY WHITESPACE query_name separator
               OUTPUT WHITESPACE output_type separator
               (CONTENT WHITESPACE content separator)?
               MATCH WHITESPACE match_clause separator
               (OPTIONAL WHITESPACE MATCH WHITESPACE match_clause separator)?
               (WHERE WHITESPACE where_clause separator)?
               FROM WHITESPACE publisher_list separator
               WITHIN WHITESPACE window separator
               (WITH_QOS WHITESPACE metric_list separator)?
               RETURN WHITESPACE node_list;

query_name  : WORD ;

output_type  : output ((COMMA | (COMMA WHITESPACE+)) output)* ;
output : WORD ;

separator : (NEWLINE | WHITESPACE)+ ;

content : (content_service | COMMA | WHITESPACE)+ ;
content_service : WORD ;

match_clause : relationship (((WHITESPACE* COMMA) | (COMMA WHITESPACE*) | (WHITESPACE* COMMA WHITESPACE*)) relationship)* ;

relationship : left_object (relationship_ref_with_class relationship)? ;
relationship_ref_with_class : ('-' relationship_ref_middle? '->' | '-' relationship_ref_middle? '-' | '<-' relationship_ref_middle? '-') ;
relationship_ref_middle : (LBRACK (object_ref)? COLON relationship_type (WHITESPACE* attributes)? RBRACK) ;
relationship_type : alphanumeric ;


left_object : object_ref_with_class ;
right_object : object_ref_with_class ;
object_ref_with_class  : LPAREN (object_ref)? (COLON object_class)? (WHITESPACE* attributes)? RPAREN ;
object_class : WORD ;
object_ref : alphanumeric ;

attributes : LCURLY WHITESPACE* attribute ((COMMA | (COMMA WHITESPACE*)) attribute)* WHITESPACE* RCURLY ;
attribute : attribute_name COLON attribute_value ;
attribute_name : WORD ;
attribute_value : (attribute_value_str | attribute_value_num) ;
attribute_value_str : ('\'' | '"') (alphanumeric | WHITESPACE)* ('\'' | '"') ;
attribute_value_num :  NUMBER+ ;

logical_operator    : (AND | OR) ;

where_clause : where_attribute (WHITESPACE* logical_operator WHITESPACE* where_attribute)* ;
where_attribute : attribute_name DOT attribute_name WHITESPACE comparison_operator WHITESPACE (attribute_value | attribute_name DOT attribute_name) ;

publisher_list : publisher ((COMMA | (COMMA WHITESPACE)) publisher)* ;
publisher : (alphanumeric | ASTERISK)+ ;

window : window_type LPAREN window_arg_list RPAREN ;
window_type : WORD ;
window_arg_list : window_arg ((COMMA | (COMMA WHITESPACE)) window_arg)* ;
window_arg : alphanumeric ;

metric_list : metric ((COMMA | (COMMA WHITESPACE)) metric)* ;
metric : metric_name WHITESPACE comparison_operator WHITESPACE metric_value ;
metric_name : WORD ;
metric_value : alphanumeric ;

node_list : node ((COMMA | (COMMA WHITESPACE)) node)* ;
node : (alphanumeric (DOT alphanumeric)? | ASTERISK)+;










