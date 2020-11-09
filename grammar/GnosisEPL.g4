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
GTH	: '>' ;
LTH	: '<' ;
UNDERSCORE : '_' ;
EQUAL : '=' ;

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;
fragment DIGIT : [0-9] ;

REGISTER : R E G I S T E R ;
QUERY : Q U E R Y ;
OUTPUT : O U T P U T ;
CONTENT : C O N T E N T ;
SELECT : S E L E C T ;
MATCH : M A T C H ;
SPATIAL : S P A T I A L ;
TEMPORAL : T E M P O R A L ;
LEFT : L E F T ;
RIGHT : R I G H T ;
BACK : B A C K ;
FRONT : F R O N T ;
AND : A N D ;
OR : O R ;
FROM                : F R O M;
WHERE               : W H E R E;
WITHIN : W I T H I N ;
TUMLBING_TIME_WINDOW    : T U M B L I N G UNDERSCORE T I M E UNDERSCORE W I N D O W ;
TUMLBING_COUNT_WINDOW    : T U M B L I N G UNDERSCORE C O U N T UNDERSCORE W I N D O W ;
SLIDING_TIME_WINDOW    : S L I D I N G UNDERSCORE T I M E UNDERSCORE W I N D O W ;
SLIDING_COUNT_WINDOW    : S L I D I N G UNDERSCORE C O U N T UNDERSCORE W I N D O W ;
CONFIDENCE : C O N F I D E N C E ;
WITH_QoS : W I T H UNDERSCORE Q O S ;
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

comparison_operator : (EQUAL | GTH | LTH) ;

query : subcription + EOF ;

subcription  : REGISTER WHITESPACE QUERY WHITESPACE query_name separator
               OUTPUT WHITESPACE output_type separator
               CONTENT WHITESPACE content separator
               MATCH WHITESPACE match_clause separator
               (WHERE WHITESPACE where_clause)?
               FROM WHITESPACE publisher separator
               WITHIN WHITESPACE window separator
               //WITH_QoS WHITESPACE metric_list separator
               RETURN WHITESPACE node_list;

query_name  : WORD ;

output_type  : output ((COMMA | (COMMA WHITESPACE+)) output)* ;
output : WORD ;

separator : (NEWLINE | WHITESPACE)+ ;

content : (content_service | COMMA | WHITESPACE)+ ;
content_service : (WORD | '-')+ ;

match_clause : relationship (WHITESPACE match_type WHITESPACE relationship)* ;
match_type : (MATCH | OPTIONAL WHITESPACE MATCH | logical_operator) ;
relationship : left_object (left_rel_direction LBRACK operator_type COLON query_operator RBRACK right_rel_direction right_object)?;

left_object : object_ref_with_class ;
left_rel_direction: ('<-' | '-' | '->') ;
right_rel_direction: ('<-' | '-' | '->') ;
right_object : object_ref_with_class ;
object_ref_with_class  : LPAREN object_ref COLON object_class (WHITESPACE* attributes)? RPAREN ;
object_class : WORD ;
object_ref : alphanumeric ;

attributes : LCURLY WHITESPACE* attribute ((COMMA | (COMMA WHITESPACE*)) attribute)* WHITESPACE* RCURLY ;
attribute : attribute_name COLON ('\'' | '"') attribute_value ('\'' | '"');
attribute_name : WORD ;
attribute_value : (WORD | WHITESPACE)+ ;

operator_type       : SPATIAL ;
query_operator      : (LEFT | RIGHT | BACK | FRONT) ;
logical_operator    : (AND | OR) ;

where_clause : ( ~FROM* | '\'' | '"') ;

publisher : (alphanumeric | '.mp4')+ ;

window : window_type LPAREN window_size RPAREN ;
window_type : (TUMLBING_TIME_WINDOW | TUMLBING_COUNT_WINDOW | SLIDING_TIME_WINDOW | SLIDING_COUNT_WINDOW) ;
window_size : window_length ((COMMA | (COMMA WHITESPACE)) sliding_length)?;
window_length : NUMBER ;
sliding_length : NUMBER ;

metric_list : metric ((COMMA | (COMMA WHITESPACE)) metric)* ;
metric : metric_name WHITESPACE comparison_operator WHITESPACE metric_value ;
metric_name : CONFIDENCE ;
metric_value : NUMBER ;

node_list : node ((COMMA | (COMMA WHITESPACE)) node)* ;
node : (alphanumeric | ASTERISK)+;










