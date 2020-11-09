// Generated from GnosisEPL.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GnosisEPLListener = require('./GnosisEPLListener').GnosisEPLListener;
var grammarFileName = "GnosisEPL.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003:\u0161\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0003\u0002\u0006\u0002",
    "T\n\u0002\r\u0002\u000e\u0002U\u0003\u0003\u0003\u0003\u0003\u0004\u0006",
    "\u0004[\n\u0004\r\u0004\u000e\u0004\\\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005v\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0006\u0007\u008a",
    "\n\u0007\r\u0007\u000e\u0007\u008b\u0005\u0007\u008e\n\u0007\u0003\u0007",
    "\u0007\u0007\u0091\n\u0007\f\u0007\u000e\u0007\u0094\u000b\u0007\u0003",
    "\b\u0003\b\u0003\t\u0006\t\u0099\n\t\r\t\u000e\t\u009a\u0003\n\u0003",
    "\n\u0003\n\u0006\n\u00a0\n\n\r\n\u000e\n\u00a1\u0003\u000b\u0006\u000b",
    "\u00a5\n\u000b\r\u000b\u000e\u000b\u00a6\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0007\f\u00af\n\f\f\f\u000e\f\u00b2\u000b\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00b9\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00c5\n\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0007\u0013\u00d4\n\u0013\f\u0013\u000e\u0013\u00d7\u000b\u0013\u0003",
    "\u0013\u0005\u0013\u00da\n\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0007\u0016",
    "\u00e4\n\u0016\f\u0016\u000e\u0016\u00e7\u000b\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u00ed\n\u0016\f\u0016\u000e",
    "\u0016\u00f0\u000b\u0016\u0005\u0016\u00f2\n\u0016\u0003\u0016\u0007",
    "\u0016\u00f5\n\u0016\f\u0016\u000e\u0016\u00f8\u000b\u0016\u0003\u0016",
    "\u0007\u0016\u00fb\n\u0016\f\u0016\u000e\u0016\u00fe\u000b\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0006\u0019\u010b",
    "\n\u0019\r\u0019\u000e\u0019\u010c\u0003\u001a\u0003\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0007\u001d\u0116\n",
    "\u001d\f\u001d\u000e\u001d\u0119\u000b\u001d\u0003\u001d\u0003\u001d",
    "\u0005\u001d\u011d\n\u001d\u0003\u001e\u0003\u001e\u0006\u001e\u0121",
    "\n\u001e\r\u001e\u000e\u001e\u0122\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0005",
    "!\u0130\n!\u0003!\u0005!\u0133\n!\u0003\"\u0003\"\u0003#\u0003#\u0003",
    "$\u0003$\u0003$\u0003$\u0005$\u013d\n$\u0003$\u0007$\u0140\n$\f$\u000e",
    "$\u0143\u000b$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0005(\u0153\n(\u0003",
    "(\u0007(\u0156\n(\f(\u000e(\u0159\u000b(\u0003)\u0003)\u0006)\u015d",
    "\n)\r)\u000e)\u015e\u0003)\u0002\u0002*\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B",
    "DFHJLNP\u0002\r\u0003\u000267\u0004\u0002\u0019\u001a\u001c\u001c\u0003",
    "\u000289\u0004\u0002\u0003\u000377\u0003\u0002\u0003\u0005\u0003\u0002",
    "\u0006\u0007\u0003\u000278\u0003\u0002%(\u0003\u0002)*\u0003\u0002+",
    "+\u0003\u0002.1\u0002\u015c\u0002S\u0003\u0002\u0002\u0002\u0004W\u0003",
    "\u0002\u0002\u0002\u0006Z\u0003\u0002\u0002\u0002\b`\u0003\u0002\u0002",
    "\u0002\n\u0083\u0003\u0002\u0002\u0002\f\u0085\u0003\u0002\u0002\u0002",
    "\u000e\u0095\u0003\u0002\u0002\u0002\u0010\u0098\u0003\u0002\u0002\u0002",
    "\u0012\u009f\u0003\u0002\u0002\u0002\u0014\u00a4\u0003\u0002\u0002\u0002",
    "\u0016\u00a8\u0003\u0002\u0002\u0002\u0018\u00b8\u0003\u0002\u0002\u0002",
    "\u001a\u00ba\u0003\u0002\u0002\u0002\u001c\u00c6\u0003\u0002\u0002\u0002",
    "\u001e\u00c8\u0003\u0002\u0002\u0002 \u00ca\u0003\u0002\u0002\u0002",
    "\"\u00cc\u0003\u0002\u0002\u0002$\u00ce\u0003\u0002\u0002\u0002&\u00dd",
    "\u0003\u0002\u0002\u0002(\u00df\u0003\u0002\u0002\u0002*\u00e1\u0003",
    "\u0002\u0002\u0002,\u0101\u0003\u0002\u0002\u0002.\u0107\u0003\u0002",
    "\u0002\u00020\u010a\u0003\u0002\u0002\u00022\u010e\u0003\u0002\u0002",
    "\u00024\u0110\u0003\u0002\u0002\u00026\u0112\u0003\u0002\u0002\u0002",
    "8\u011c\u0003\u0002\u0002\u0002:\u0120\u0003\u0002\u0002\u0002<\u0124",
    "\u0003\u0002\u0002\u0002>\u0129\u0003\u0002\u0002\u0002@\u012b\u0003",
    "\u0002\u0002\u0002B\u0134\u0003\u0002\u0002\u0002D\u0136\u0003\u0002",
    "\u0002\u0002F\u0138\u0003\u0002\u0002\u0002H\u0144\u0003\u0002\u0002",
    "\u0002J\u014a\u0003\u0002\u0002\u0002L\u014c\u0003\u0002\u0002\u0002",
    "N\u014e\u0003\u0002\u0002\u0002P\u015c\u0003\u0002\u0002\u0002RT\t\u0002",
    "\u0002\u0002SR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002US\u0003",
    "\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002V\u0003\u0003\u0002\u0002",
    "\u0002WX\t\u0003\u0002\u0002X\u0005\u0003\u0002\u0002\u0002Y[\u0005",
    "\b\u0005\u0002ZY\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002",
    "\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]^\u0003\u0002",
    "\u0002\u0002^_\u0007\u0002\u0002\u0003_\u0007\u0003\u0002\u0002\u0002",
    "`a\u0007\u001d\u0002\u0002ab\u00078\u0002\u0002bc\u0007\u001e\u0002",
    "\u0002cd\u00078\u0002\u0002de\u0005\n\u0006\u0002ef\u0005\u0010\t\u0002",
    "fg\u0007\u001f\u0002\u0002gh\u00078\u0002\u0002hi\u0005\f\u0007\u0002",
    "ij\u0005\u0010\t\u0002jk\u0007 \u0002\u0002kl\u00078\u0002\u0002lm\u0005",
    "\u0012\n\u0002mn\u0005\u0010\t\u0002no\u0007\"\u0002\u0002op\u00078",
    "\u0002\u0002pq\u0005\u0016\f\u0002qu\u0005\u0010\t\u0002rs\u0007,\u0002",
    "\u0002st\u00078\u0002\u0002tv\u00058\u001d\u0002ur\u0003\u0002\u0002",
    "\u0002uv\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0007+",
    "\u0002\u0002xy\u00078\u0002\u0002yz\u0005:\u001e\u0002z{\u0005\u0010",
    "\t\u0002{|\u0007-\u0002\u0002|}\u00078\u0002\u0002}~\u0005<\u001f\u0002",
    "~\u007f\u0005\u0010\t\u0002\u007f\u0080\u00074\u0002\u0002\u0080\u0081",
    "\u00078\u0002\u0002\u0081\u0082\u0005N(\u0002\u0082\t\u0003\u0002\u0002",
    "\u0002\u0083\u0084\u00077\u0002\u0002\u0084\u000b\u0003\u0002\u0002",
    "\u0002\u0085\u0092\u0005\u000e\b\u0002\u0086\u008e\u0007\f\u0002\u0002",
    "\u0087\u0089\u0007\f\u0002\u0002\u0088\u008a\u00078\u0002\u0002\u0089",
    "\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b",
    "\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c",
    "\u008e\u0003\u0002\u0002\u0002\u008d\u0086\u0003\u0002\u0002\u0002\u008d",
    "\u0087\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f",
    "\u0091\u0005\u000e\b\u0002\u0090\u008d\u0003\u0002\u0002\u0002\u0091",
    "\u0094\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092",
    "\u0093\u0003\u0002\u0002\u0002\u0093\r\u0003\u0002\u0002\u0002\u0094",
    "\u0092\u0003\u0002\u0002\u0002\u0095\u0096\u00077\u0002\u0002\u0096",
    "\u000f\u0003\u0002\u0002\u0002\u0097\u0099\t\u0004\u0002\u0002\u0098",
    "\u0097\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a",
    "\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b",
    "\u0011\u0003\u0002\u0002\u0002\u009c\u00a0\u0005\u0014\u000b\u0002\u009d",
    "\u00a0\u0007\f\u0002\u0002\u009e\u00a0\u00078\u0002\u0002\u009f\u009c",
    "\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u009e",
    "\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u009f",
    "\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u0013",
    "\u0003\u0002\u0002\u0002\u00a3\u00a5\t\u0005\u0002\u0002\u00a4\u00a3",
    "\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a4",
    "\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\u0015",
    "\u0003\u0002\u0002\u0002\u00a8\u00b0\u0005\u001a\u000e\u0002\u00a9\u00aa",
    "\u00078\u0002\u0002\u00aa\u00ab\u0005\u0018\r\u0002\u00ab\u00ac\u0007",
    "8\u0002\u0002\u00ac\u00ad\u0005\u001a\u000e\u0002\u00ad\u00af\u0003",
    "\u0002\u0002\u0002\u00ae\u00a9\u0003\u0002\u0002\u0002\u00af\u00b2\u0003",
    "\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003",
    "\u0002\u0002\u0002\u00b1\u0017\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003",
    "\u0002\u0002\u0002\u00b3\u00b9\u0007\"\u0002\u0002\u00b4\u00b5\u0007",
    "5\u0002\u0002\u00b5\u00b6\u00078\u0002\u0002\u00b6\u00b9\u0007\"\u0002",
    "\u0002\u00b7\u00b9\u00056\u001c\u0002\u00b8\u00b3\u0003\u0002\u0002",
    "\u0002\u00b8\u00b4\u0003\u0002\u0002\u0002\u00b8\u00b7\u0003\u0002\u0002",
    "\u0002\u00b9\u0019\u0003\u0002\u0002\u0002\u00ba\u00c4\u0005\u001c\u000f",
    "\u0002\u00bb\u00bc\u0005\u001e\u0010\u0002\u00bc\u00bd\u0007\u0011\u0002",
    "\u0002\u00bd\u00be\u00052\u001a\u0002\u00be\u00bf\u0007\n\u0002\u0002",
    "\u00bf\u00c0\u00054\u001b\u0002\u00c0\u00c1\u0007\u0010\u0002\u0002",
    "\u00c1\u00c2\u0005 \u0011\u0002\u00c2\u00c3\u0005\"\u0012\u0002\u00c3",
    "\u00c5\u0003\u0002\u0002\u0002\u00c4\u00bb\u0003\u0002\u0002\u0002\u00c4",
    "\u00c5\u0003\u0002\u0002\u0002\u00c5\u001b\u0003\u0002\u0002\u0002\u00c6",
    "\u00c7\u0005$\u0013\u0002\u00c7\u001d\u0003\u0002\u0002\u0002\u00c8",
    "\u00c9\t\u0006\u0002\u0002\u00c9\u001f\u0003\u0002\u0002\u0002\u00ca",
    "\u00cb\t\u0006\u0002\u0002\u00cb!\u0003\u0002\u0002\u0002\u00cc\u00cd",
    "\u0005$\u0013\u0002\u00cd#\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007",
    "\u000f\u0002\u0002\u00cf\u00d0\u0005(\u0015\u0002\u00d0\u00d1\u0007",
    "\n\u0002\u0002\u00d1\u00d9\u0005&\u0014\u0002\u00d2\u00d4\u00078\u0002",
    "\u0002\u00d3\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d7\u0003\u0002\u0002",
    "\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002",
    "\u0002\u00d6\u00d8\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002",
    "\u0002\u00d8\u00da\u0005*\u0016\u0002\u00d9\u00d5\u0003\u0002\u0002",
    "\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002",
    "\u0002\u00db\u00dc\u0007\u000e\u0002\u0002\u00dc%\u0003\u0002\u0002",
    "\u0002\u00dd\u00de\u00077\u0002\u0002\u00de\'\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0005\u0002\u0002\u0002\u00e0)\u0003\u0002\u0002\u0002",
    "\u00e1\u00e5\u0007\u0013\u0002\u0002\u00e2\u00e4\u00078\u0002\u0002",
    "\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002\u0002",
    "\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002",
    "\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002",
    "\u00e8\u00f6\u0005,\u0017\u0002\u00e9\u00f2\u0007\f\u0002\u0002\u00ea",
    "\u00ee\u0007\f\u0002\u0002\u00eb\u00ed\u00078\u0002\u0002\u00ec\u00eb",
    "\u0003\u0002\u0002\u0002\u00ed\u00f0\u0003\u0002\u0002\u0002\u00ee\u00ec",
    "\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f2",
    "\u0003\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f1\u00e9",
    "\u0003\u0002\u0002\u0002\u00f1\u00ea\u0003\u0002\u0002\u0002\u00f2\u00f3",
    "\u0003\u0002\u0002\u0002\u00f3\u00f5\u0005,\u0017\u0002\u00f4\u00f1",
    "\u0003\u0002\u0002\u0002\u00f5\u00f8\u0003\u0002\u0002\u0002\u00f6\u00f4",
    "\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00fc",
    "\u0003\u0002\u0002\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f9\u00fb",
    "\u00078\u0002\u0002\u00fa\u00f9\u0003\u0002\u0002\u0002\u00fb\u00fe",
    "\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fd",
    "\u0003\u0002\u0002\u0002\u00fd\u00ff\u0003\u0002\u0002\u0002\u00fe\u00fc",
    "\u0003\u0002\u0002\u0002\u00ff\u0100\u0007\u0012\u0002\u0002\u0100+",
    "\u0003\u0002\u0002\u0002\u0101\u0102\u0005.\u0018\u0002\u0102\u0103",
    "\u0007\n\u0002\u0002\u0103\u0104\t\u0007\u0002\u0002\u0104\u0105\u0005",
    "0\u0019\u0002\u0105\u0106\t\u0007\u0002\u0002\u0106-\u0003\u0002\u0002",
    "\u0002\u0107\u0108\u00077\u0002\u0002\u0108/\u0003\u0002\u0002\u0002",
    "\u0109\u010b\t\b\u0002\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010b",
    "\u010c\u0003\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c",
    "\u010d\u0003\u0002\u0002\u0002\u010d1\u0003\u0002\u0002\u0002\u010e",
    "\u010f\u0007#\u0002\u0002\u010f3\u0003\u0002\u0002\u0002\u0110\u0111",
    "\t\t\u0002\u0002\u01115\u0003\u0002\u0002\u0002\u0112\u0113\t\n\u0002",
    "\u0002\u01137\u0003\u0002\u0002\u0002\u0114\u0116\n\u000b\u0002\u0002",
    "\u0115\u0114\u0003\u0002\u0002\u0002\u0116\u0119\u0003\u0002\u0002\u0002",
    "\u0117\u0115\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002",
    "\u0118\u011d\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002",
    "\u011a\u011d\u0007\u0006\u0002\u0002\u011b\u011d\u0007\u0007\u0002\u0002",
    "\u011c\u0117\u0003\u0002\u0002\u0002\u011c\u011a\u0003\u0002\u0002\u0002",
    "\u011c\u011b\u0003\u0002\u0002\u0002\u011d9\u0003\u0002\u0002\u0002",
    "\u011e\u0121\u0005\u0002\u0002\u0002\u011f\u0121\u0007\b\u0002\u0002",
    "\u0120\u011e\u0003\u0002\u0002\u0002\u0120\u011f\u0003\u0002\u0002\u0002",
    "\u0121\u0122\u0003\u0002\u0002\u0002\u0122\u0120\u0003\u0002\u0002\u0002",
    "\u0122\u0123\u0003\u0002\u0002\u0002\u0123;\u0003\u0002\u0002\u0002",
    "\u0124\u0125\u0005> \u0002\u0125\u0126\u0007\u000f\u0002\u0002\u0126",
    "\u0127\u0005@!\u0002\u0127\u0128\u0007\u000e\u0002\u0002\u0128=\u0003",
    "\u0002\u0002\u0002\u0129\u012a\t\f\u0002\u0002\u012a?\u0003\u0002\u0002",
    "\u0002\u012b\u0132\u0005B\"\u0002\u012c\u0130\u0007\f\u0002\u0002\u012d",
    "\u012e\u0007\f\u0002\u0002\u012e\u0130\u00078\u0002\u0002\u012f\u012c",
    "\u0003\u0002\u0002\u0002\u012f\u012d\u0003\u0002\u0002\u0002\u0130\u0131",
    "\u0003\u0002\u0002\u0002\u0131\u0133\u0005D#\u0002\u0132\u012f\u0003",
    "\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133A\u0003",
    "\u0002\u0002\u0002\u0134\u0135\u00076\u0002\u0002\u0135C\u0003\u0002",
    "\u0002\u0002\u0136\u0137\u00076\u0002\u0002\u0137E\u0003\u0002\u0002",
    "\u0002\u0138\u0141\u0005H%\u0002\u0139\u013d\u0007\f\u0002\u0002\u013a",
    "\u013b\u0007\f\u0002\u0002\u013b\u013d\u00078\u0002\u0002\u013c\u0139",
    "\u0003\u0002\u0002\u0002\u013c\u013a\u0003\u0002\u0002\u0002\u013d\u013e",
    "\u0003\u0002\u0002\u0002\u013e\u0140\u0005H%\u0002\u013f\u013c\u0003",
    "\u0002\u0002\u0002\u0140\u0143\u0003\u0002\u0002\u0002\u0141\u013f\u0003",
    "\u0002\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002\u0142G\u0003",
    "\u0002\u0002\u0002\u0143\u0141\u0003\u0002\u0002\u0002\u0144\u0145\u0005",
    "J&\u0002\u0145\u0146\u00078\u0002\u0002\u0146\u0147\u0005\u0004\u0003",
    "\u0002\u0147\u0148\u00078\u0002\u0002\u0148\u0149\u0005L\'\u0002\u0149",
    "I\u0003\u0002\u0002\u0002\u014a\u014b\u00072\u0002\u0002\u014bK\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u00076\u0002\u0002\u014dM\u0003\u0002",
    "\u0002\u0002\u014e\u0157\u0005P)\u0002\u014f\u0153\u0007\f\u0002\u0002",
    "\u0150\u0151\u0007\f\u0002\u0002\u0151\u0153\u00078\u0002\u0002\u0152",
    "\u014f\u0003\u0002\u0002\u0002\u0152\u0150\u0003\u0002\u0002\u0002\u0153",
    "\u0154\u0003\u0002\u0002\u0002\u0154\u0156\u0005P)\u0002\u0155\u0152",
    "\u0003\u0002\u0002\u0002\u0156\u0159\u0003\u0002\u0002\u0002\u0157\u0155",
    "\u0003\u0002\u0002\u0002\u0157\u0158\u0003\u0002\u0002\u0002\u0158O",
    "\u0003\u0002\u0002\u0002\u0159\u0157\u0003\u0002\u0002\u0002\u015a\u015d",
    "\u0005\u0002\u0002\u0002\u015b\u015d\u0007\r\u0002\u0002\u015c\u015a",
    "\u0003\u0002\u0002\u0002\u015c\u015b\u0003\u0002\u0002\u0002\u015d\u015e",
    "\u0003\u0002\u0002\u0002\u015e\u015c\u0003\u0002\u0002\u0002\u015e\u015f",
    "\u0003\u0002\u0002\u0002\u015fQ\u0003\u0002\u0002\u0002#U\\u\u008b\u008d",
    "\u0092\u009a\u009f\u00a1\u00a6\u00b0\u00b8\u00c4\u00d5\u00d9\u00e5\u00ee",
    "\u00f1\u00f6\u00fc\u010c\u0117\u011c\u0120\u0122\u012f\u0132\u013c\u0141",
    "\u0152\u0157\u015c\u015e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'-'", "'<-'", "'->'", "'''", "'\"'", "'.mp4'", 
                     "';'", "':'", "'.'", "','", "'*'", "')'", "'('", "']'", 
                     "'['", "'}'", "'{'", "'+'", "'~'", "'|'", "'&'", "'^'", 
                     "'>'", "'<'", "'_'", "'='", null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, "'?(.*)'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "SEMI", 
                      "COLON", "DOT", "COMMA", "ASTERISK", "RPAREN", "LPAREN", 
                      "RBRACK", "LBRACK", "RCURLY", "LCURLY", "PLUS", "NEGATION", 
                      "VERTBAR", "BITAND", "POWER_OP", "GTH", "LTH", "UNDERSCORE", 
                      "EQUAL", "REGISTER", "QUERY", "OUTPUT", "CONTENT", 
                      "SELECT", "MATCH", "SPATIAL", "TEMPORAL", "LEFT", 
                      "RIGHT", "BACK", "FRONT", "AND", "OR", "FROM", "WHERE", 
                      "WITHIN", "TUMLBING_TIME_WINDOW", "TUMLBING_COUNT_WINDOW", 
                      "SLIDING_TIME_WINDOW", "SLIDING_COUNT_WINDOW", "CONFIDENCE", 
                      "WITH_QoS", "RETURN", "OPTIONAL", "NUMBER", "WORD", 
                      "WHITESPACE", "NEWLINE", "EVERYTHING" ];

var ruleNames =  [ "alphanumeric", "comparison_operator", "query", "subcription", 
                   "query_name", "output_type", "output", "separator", "content", 
                   "content_service", "match_clause", "match_type", "relationship", 
                   "left_object", "left_rel_direction", "right_rel_direction", 
                   "right_object", "object_ref_with_class", "object_class", 
                   "object_ref", "attributes", "attribute", "attribute_name", 
                   "attribute_value", "operator_type", "query_operator", 
                   "logical_operator", "where_clause", "publisher", "window", 
                   "window_type", "window_size", "window_length", "sliding_length", 
                   "metric_list", "metric", "metric_name", "metric_value", 
                   "node_list", "node" ];

function GnosisEPLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GnosisEPLParser.prototype = Object.create(antlr4.Parser.prototype);
GnosisEPLParser.prototype.constructor = GnosisEPLParser;

Object.defineProperty(GnosisEPLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GnosisEPLParser.EOF = antlr4.Token.EOF;
GnosisEPLParser.T__0 = 1;
GnosisEPLParser.T__1 = 2;
GnosisEPLParser.T__2 = 3;
GnosisEPLParser.T__3 = 4;
GnosisEPLParser.T__4 = 5;
GnosisEPLParser.T__5 = 6;
GnosisEPLParser.SEMI = 7;
GnosisEPLParser.COLON = 8;
GnosisEPLParser.DOT = 9;
GnosisEPLParser.COMMA = 10;
GnosisEPLParser.ASTERISK = 11;
GnosisEPLParser.RPAREN = 12;
GnosisEPLParser.LPAREN = 13;
GnosisEPLParser.RBRACK = 14;
GnosisEPLParser.LBRACK = 15;
GnosisEPLParser.RCURLY = 16;
GnosisEPLParser.LCURLY = 17;
GnosisEPLParser.PLUS = 18;
GnosisEPLParser.NEGATION = 19;
GnosisEPLParser.VERTBAR = 20;
GnosisEPLParser.BITAND = 21;
GnosisEPLParser.POWER_OP = 22;
GnosisEPLParser.GTH = 23;
GnosisEPLParser.LTH = 24;
GnosisEPLParser.UNDERSCORE = 25;
GnosisEPLParser.EQUAL = 26;
GnosisEPLParser.REGISTER = 27;
GnosisEPLParser.QUERY = 28;
GnosisEPLParser.OUTPUT = 29;
GnosisEPLParser.CONTENT = 30;
GnosisEPLParser.SELECT = 31;
GnosisEPLParser.MATCH = 32;
GnosisEPLParser.SPATIAL = 33;
GnosisEPLParser.TEMPORAL = 34;
GnosisEPLParser.LEFT = 35;
GnosisEPLParser.RIGHT = 36;
GnosisEPLParser.BACK = 37;
GnosisEPLParser.FRONT = 38;
GnosisEPLParser.AND = 39;
GnosisEPLParser.OR = 40;
GnosisEPLParser.FROM = 41;
GnosisEPLParser.WHERE = 42;
GnosisEPLParser.WITHIN = 43;
GnosisEPLParser.TUMLBING_TIME_WINDOW = 44;
GnosisEPLParser.TUMLBING_COUNT_WINDOW = 45;
GnosisEPLParser.SLIDING_TIME_WINDOW = 46;
GnosisEPLParser.SLIDING_COUNT_WINDOW = 47;
GnosisEPLParser.CONFIDENCE = 48;
GnosisEPLParser.WITH_QoS = 49;
GnosisEPLParser.RETURN = 50;
GnosisEPLParser.OPTIONAL = 51;
GnosisEPLParser.NUMBER = 52;
GnosisEPLParser.WORD = 53;
GnosisEPLParser.WHITESPACE = 54;
GnosisEPLParser.NEWLINE = 55;
GnosisEPLParser.EVERYTHING = 56;

GnosisEPLParser.RULE_alphanumeric = 0;
GnosisEPLParser.RULE_comparison_operator = 1;
GnosisEPLParser.RULE_query = 2;
GnosisEPLParser.RULE_subcription = 3;
GnosisEPLParser.RULE_query_name = 4;
GnosisEPLParser.RULE_output_type = 5;
GnosisEPLParser.RULE_output = 6;
GnosisEPLParser.RULE_separator = 7;
GnosisEPLParser.RULE_content = 8;
GnosisEPLParser.RULE_content_service = 9;
GnosisEPLParser.RULE_match_clause = 10;
GnosisEPLParser.RULE_match_type = 11;
GnosisEPLParser.RULE_relationship = 12;
GnosisEPLParser.RULE_left_object = 13;
GnosisEPLParser.RULE_left_rel_direction = 14;
GnosisEPLParser.RULE_right_rel_direction = 15;
GnosisEPLParser.RULE_right_object = 16;
GnosisEPLParser.RULE_object_ref_with_class = 17;
GnosisEPLParser.RULE_object_class = 18;
GnosisEPLParser.RULE_object_ref = 19;
GnosisEPLParser.RULE_attributes = 20;
GnosisEPLParser.RULE_attribute = 21;
GnosisEPLParser.RULE_attribute_name = 22;
GnosisEPLParser.RULE_attribute_value = 23;
GnosisEPLParser.RULE_operator_type = 24;
GnosisEPLParser.RULE_query_operator = 25;
GnosisEPLParser.RULE_logical_operator = 26;
GnosisEPLParser.RULE_where_clause = 27;
GnosisEPLParser.RULE_publisher = 28;
GnosisEPLParser.RULE_window = 29;
GnosisEPLParser.RULE_window_type = 30;
GnosisEPLParser.RULE_window_size = 31;
GnosisEPLParser.RULE_window_length = 32;
GnosisEPLParser.RULE_sliding_length = 33;
GnosisEPLParser.RULE_metric_list = 34;
GnosisEPLParser.RULE_metric = 35;
GnosisEPLParser.RULE_metric_name = 36;
GnosisEPLParser.RULE_metric_value = 37;
GnosisEPLParser.RULE_node_list = 38;
GnosisEPLParser.RULE_node = 39;


function AlphanumericContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_alphanumeric;
    return this;
}

AlphanumericContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlphanumericContext.prototype.constructor = AlphanumericContext;

AlphanumericContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WORD);
    } else {
        return this.getToken(GnosisEPLParser.WORD, i);
    }
};


AlphanumericContext.prototype.NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.NUMBER);
    } else {
        return this.getToken(GnosisEPLParser.NUMBER, i);
    }
};


AlphanumericContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterAlphanumeric(this);
	}
};

AlphanumericContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitAlphanumeric(this);
	}
};




GnosisEPLParser.AlphanumericContext = AlphanumericContext;

GnosisEPLParser.prototype.alphanumeric = function() {

    var localctx = new AlphanumericContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GnosisEPLParser.RULE_alphanumeric);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 80;
        		_la = this._input.LA(1);
        		if(!(_la===GnosisEPLParser.NUMBER || _la===GnosisEPLParser.WORD)) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        			this._errHandler.reportMatch(this);
        		    this.consume();
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 83; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Comparison_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_comparison_operator;
    return this;
}

Comparison_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Comparison_operatorContext.prototype.constructor = Comparison_operatorContext;

Comparison_operatorContext.prototype.EQUAL = function() {
    return this.getToken(GnosisEPLParser.EQUAL, 0);
};

Comparison_operatorContext.prototype.GTH = function() {
    return this.getToken(GnosisEPLParser.GTH, 0);
};

Comparison_operatorContext.prototype.LTH = function() {
    return this.getToken(GnosisEPLParser.LTH, 0);
};

Comparison_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterComparison_operator(this);
	}
};

Comparison_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitComparison_operator(this);
	}
};




GnosisEPLParser.Comparison_operatorContext = Comparison_operatorContext;

GnosisEPLParser.prototype.comparison_operator = function() {

    var localctx = new Comparison_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GnosisEPLParser.RULE_comparison_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GnosisEPLParser.GTH) | (1 << GnosisEPLParser.LTH) | (1 << GnosisEPLParser.EQUAL))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.EOF = function() {
    return this.getToken(GnosisEPLParser.EOF, 0);
};

QueryContext.prototype.subcription = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SubcriptionContext);
    } else {
        return this.getTypedRuleContext(SubcriptionContext,i);
    }
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitQuery(this);
	}
};




GnosisEPLParser.QueryContext = QueryContext;

GnosisEPLParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GnosisEPLParser.RULE_query);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 87;
            this.subcription();
            this.state = 90; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GnosisEPLParser.REGISTER);
        this.state = 92;
        this.match(GnosisEPLParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SubcriptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_subcription;
    return this;
}

SubcriptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubcriptionContext.prototype.constructor = SubcriptionContext;

SubcriptionContext.prototype.REGISTER = function() {
    return this.getToken(GnosisEPLParser.REGISTER, 0);
};

SubcriptionContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


SubcriptionContext.prototype.QUERY = function() {
    return this.getToken(GnosisEPLParser.QUERY, 0);
};

SubcriptionContext.prototype.query_name = function() {
    return this.getTypedRuleContext(Query_nameContext,0);
};

SubcriptionContext.prototype.separator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SeparatorContext);
    } else {
        return this.getTypedRuleContext(SeparatorContext,i);
    }
};

SubcriptionContext.prototype.OUTPUT = function() {
    return this.getToken(GnosisEPLParser.OUTPUT, 0);
};

SubcriptionContext.prototype.output_type = function() {
    return this.getTypedRuleContext(Output_typeContext,0);
};

SubcriptionContext.prototype.CONTENT = function() {
    return this.getToken(GnosisEPLParser.CONTENT, 0);
};

SubcriptionContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

SubcriptionContext.prototype.MATCH = function() {
    return this.getToken(GnosisEPLParser.MATCH, 0);
};

SubcriptionContext.prototype.match_clause = function() {
    return this.getTypedRuleContext(Match_clauseContext,0);
};

SubcriptionContext.prototype.FROM = function() {
    return this.getToken(GnosisEPLParser.FROM, 0);
};

SubcriptionContext.prototype.publisher = function() {
    return this.getTypedRuleContext(PublisherContext,0);
};

SubcriptionContext.prototype.WITHIN = function() {
    return this.getToken(GnosisEPLParser.WITHIN, 0);
};

SubcriptionContext.prototype.window = function() {
    return this.getTypedRuleContext(WindowContext,0);
};

SubcriptionContext.prototype.RETURN = function() {
    return this.getToken(GnosisEPLParser.RETURN, 0);
};

SubcriptionContext.prototype.node_list = function() {
    return this.getTypedRuleContext(Node_listContext,0);
};

SubcriptionContext.prototype.WHERE = function() {
    return this.getToken(GnosisEPLParser.WHERE, 0);
};

SubcriptionContext.prototype.where_clause = function() {
    return this.getTypedRuleContext(Where_clauseContext,0);
};

SubcriptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterSubcription(this);
	}
};

SubcriptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitSubcription(this);
	}
};




GnosisEPLParser.SubcriptionContext = SubcriptionContext;

GnosisEPLParser.prototype.subcription = function() {

    var localctx = new SubcriptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GnosisEPLParser.RULE_subcription);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(GnosisEPLParser.REGISTER);
        this.state = 95;
        this.match(GnosisEPLParser.WHITESPACE);
        this.state = 96;
        this.match(GnosisEPLParser.QUERY);
        this.state = 97;
        this.match(GnosisEPLParser.WHITESPACE);
        this.state = 98;
        this.query_name();
        this.state = 99;
        this.separator();
        this.state = 100;
        this.match(GnosisEPLParser.OUTPUT);
        this.state = 101;
        this.match(GnosisEPLParser.WHITESPACE);
        this.state = 102;
        this.output_type();
        this.state = 103;
        this.separator();
        this.state = 104;
        this.match(GnosisEPLParser.CONTENT);
        this.state = 105;
        this.match(GnosisEPLParser.WHITESPACE);
        this.state = 106;
        this.content();
        this.state = 107;
        this.separator();
        this.state = 108;
        this.match(GnosisEPLParser.MATCH);
        this.state = 109;
        this.match(GnosisEPLParser.WHITESPACE);
        this.state = 110;
        this.match_clause();
        this.state = 111;
        this.separator();
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GnosisEPLParser.WHERE) {
            this.state = 112;
            this.match(GnosisEPLParser.WHERE);
            this.state = 113;
            this.match(GnosisEPLParser.WHITESPACE);
            this.state = 114;
            this.where_clause();
        }

        this.state = 117;
        this.match(GnosisEPLParser.FROM);
        this.state = 118;
        this.match(GnosisEPLParser.WHITESPACE);
        this.state = 119;
        this.publisher();
        this.state = 120;
        this.separator();
        this.state = 121;
        this.match(GnosisEPLParser.WITHIN);
        this.state = 122;
        this.match(GnosisEPLParser.WHITESPACE);
        this.state = 123;
        this.window();
        this.state = 124;
        this.separator();
        this.state = 125;
        this.match(GnosisEPLParser.RETURN);
        this.state = 126;
        this.match(GnosisEPLParser.WHITESPACE);
        this.state = 127;
        this.node_list();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Query_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_query_name;
    return this;
}

Query_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Query_nameContext.prototype.constructor = Query_nameContext;

Query_nameContext.prototype.WORD = function() {
    return this.getToken(GnosisEPLParser.WORD, 0);
};

Query_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterQuery_name(this);
	}
};

Query_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitQuery_name(this);
	}
};




GnosisEPLParser.Query_nameContext = Query_nameContext;

GnosisEPLParser.prototype.query_name = function() {

    var localctx = new Query_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GnosisEPLParser.RULE_query_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(GnosisEPLParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Output_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_output_type;
    return this;
}

Output_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Output_typeContext.prototype.constructor = Output_typeContext;

Output_typeContext.prototype.output = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OutputContext);
    } else {
        return this.getTypedRuleContext(OutputContext,i);
    }
};

Output_typeContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.COMMA);
    } else {
        return this.getToken(GnosisEPLParser.COMMA, i);
    }
};


Output_typeContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


Output_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterOutput_type(this);
	}
};

Output_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitOutput_type(this);
	}
};




GnosisEPLParser.Output_typeContext = Output_typeContext;

GnosisEPLParser.prototype.output_type = function() {

    var localctx = new Output_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GnosisEPLParser.RULE_output_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.output();
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GnosisEPLParser.COMMA) {
            this.state = 139;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            switch(la_) {
            case 1:
                this.state = 132;
                this.match(GnosisEPLParser.COMMA);
                break;

            case 2:
                this.state = 133;
                this.match(GnosisEPLParser.COMMA);
                this.state = 135; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 134;
                    this.match(GnosisEPLParser.WHITESPACE);
                    this.state = 137; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===GnosisEPLParser.WHITESPACE);
                break;

            }
            this.state = 141;
            this.output();
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OutputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_output;
    return this;
}

OutputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutputContext.prototype.constructor = OutputContext;

OutputContext.prototype.WORD = function() {
    return this.getToken(GnosisEPLParser.WORD, 0);
};

OutputContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterOutput(this);
	}
};

OutputContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitOutput(this);
	}
};




GnosisEPLParser.OutputContext = OutputContext;

GnosisEPLParser.prototype.output = function() {

    var localctx = new OutputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GnosisEPLParser.RULE_output);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(GnosisEPLParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SeparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_separator;
    return this;
}

SeparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SeparatorContext.prototype.constructor = SeparatorContext;

SeparatorContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.NEWLINE);
    } else {
        return this.getToken(GnosisEPLParser.NEWLINE, i);
    }
};


SeparatorContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


SeparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterSeparator(this);
	}
};

SeparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitSeparator(this);
	}
};




GnosisEPLParser.SeparatorContext = SeparatorContext;

GnosisEPLParser.prototype.separator = function() {

    var localctx = new SeparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, GnosisEPLParser.RULE_separator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 149;
            _la = this._input.LA(1);
            if(!(_la===GnosisEPLParser.WHITESPACE || _la===GnosisEPLParser.NEWLINE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 152; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GnosisEPLParser.WHITESPACE || _la===GnosisEPLParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ContentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_content;
    return this;
}

ContentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentContext.prototype.constructor = ContentContext;

ContentContext.prototype.content_service = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Content_serviceContext);
    } else {
        return this.getTypedRuleContext(Content_serviceContext,i);
    }
};

ContentContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.COMMA);
    } else {
        return this.getToken(GnosisEPLParser.COMMA, i);
    }
};


ContentContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


ContentContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterContent(this);
	}
};

ContentContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitContent(this);
	}
};




GnosisEPLParser.ContentContext = ContentContext;

GnosisEPLParser.prototype.content = function() {

    var localctx = new ContentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GnosisEPLParser.RULE_content);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 157;
        		this._errHandler.sync(this);
        		switch(this._input.LA(1)) {
        		case GnosisEPLParser.T__0:
        		case GnosisEPLParser.WORD:
        		    this.state = 154;
        		    this.content_service();
        		    break;
        		case GnosisEPLParser.COMMA:
        		    this.state = 155;
        		    this.match(GnosisEPLParser.COMMA);
        		    break;
        		case GnosisEPLParser.WHITESPACE:
        		    this.state = 156;
        		    this.match(GnosisEPLParser.WHITESPACE);
        		    break;
        		default:
        		    throw new antlr4.error.NoViableAltException(this);
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 159; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Content_serviceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_content_service;
    return this;
}

Content_serviceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Content_serviceContext.prototype.constructor = Content_serviceContext;

Content_serviceContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WORD);
    } else {
        return this.getToken(GnosisEPLParser.WORD, i);
    }
};


Content_serviceContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterContent_service(this);
	}
};

Content_serviceContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitContent_service(this);
	}
};




GnosisEPLParser.Content_serviceContext = Content_serviceContext;

GnosisEPLParser.prototype.content_service = function() {

    var localctx = new Content_serviceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, GnosisEPLParser.RULE_content_service);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 161;
        		_la = this._input.LA(1);
        		if(!(_la===GnosisEPLParser.T__0 || _la===GnosisEPLParser.WORD)) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        			this._errHandler.reportMatch(this);
        		    this.consume();
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 164; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Match_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_match_clause;
    return this;
}

Match_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Match_clauseContext.prototype.constructor = Match_clauseContext;

Match_clauseContext.prototype.relationship = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RelationshipContext);
    } else {
        return this.getTypedRuleContext(RelationshipContext,i);
    }
};

Match_clauseContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


Match_clauseContext.prototype.match_type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Match_typeContext);
    } else {
        return this.getTypedRuleContext(Match_typeContext,i);
    }
};

Match_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterMatch_clause(this);
	}
};

Match_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitMatch_clause(this);
	}
};




GnosisEPLParser.Match_clauseContext = Match_clauseContext;

GnosisEPLParser.prototype.match_clause = function() {

    var localctx = new Match_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, GnosisEPLParser.RULE_match_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.relationship();
        this.state = 174;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 167;
                this.match(GnosisEPLParser.WHITESPACE);
                this.state = 168;
                this.match_type();
                this.state = 169;
                this.match(GnosisEPLParser.WHITESPACE);
                this.state = 170;
                this.relationship(); 
            }
            this.state = 176;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Match_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_match_type;
    return this;
}

Match_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Match_typeContext.prototype.constructor = Match_typeContext;

Match_typeContext.prototype.MATCH = function() {
    return this.getToken(GnosisEPLParser.MATCH, 0);
};

Match_typeContext.prototype.OPTIONAL = function() {
    return this.getToken(GnosisEPLParser.OPTIONAL, 0);
};

Match_typeContext.prototype.WHITESPACE = function() {
    return this.getToken(GnosisEPLParser.WHITESPACE, 0);
};

Match_typeContext.prototype.logical_operator = function() {
    return this.getTypedRuleContext(Logical_operatorContext,0);
};

Match_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterMatch_type(this);
	}
};

Match_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitMatch_type(this);
	}
};




GnosisEPLParser.Match_typeContext = Match_typeContext;

GnosisEPLParser.prototype.match_type = function() {

    var localctx = new Match_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, GnosisEPLParser.RULE_match_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GnosisEPLParser.MATCH:
            this.state = 177;
            this.match(GnosisEPLParser.MATCH);
            break;
        case GnosisEPLParser.OPTIONAL:
            this.state = 178;
            this.match(GnosisEPLParser.OPTIONAL);
            this.state = 179;
            this.match(GnosisEPLParser.WHITESPACE);
            this.state = 180;
            this.match(GnosisEPLParser.MATCH);
            break;
        case GnosisEPLParser.AND:
        case GnosisEPLParser.OR:
            this.state = 181;
            this.logical_operator();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelationshipContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_relationship;
    return this;
}

RelationshipContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelationshipContext.prototype.constructor = RelationshipContext;

RelationshipContext.prototype.left_object = function() {
    return this.getTypedRuleContext(Left_objectContext,0);
};

RelationshipContext.prototype.left_rel_direction = function() {
    return this.getTypedRuleContext(Left_rel_directionContext,0);
};

RelationshipContext.prototype.LBRACK = function() {
    return this.getToken(GnosisEPLParser.LBRACK, 0);
};

RelationshipContext.prototype.operator_type = function() {
    return this.getTypedRuleContext(Operator_typeContext,0);
};

RelationshipContext.prototype.COLON = function() {
    return this.getToken(GnosisEPLParser.COLON, 0);
};

RelationshipContext.prototype.query_operator = function() {
    return this.getTypedRuleContext(Query_operatorContext,0);
};

RelationshipContext.prototype.RBRACK = function() {
    return this.getToken(GnosisEPLParser.RBRACK, 0);
};

RelationshipContext.prototype.right_rel_direction = function() {
    return this.getTypedRuleContext(Right_rel_directionContext,0);
};

RelationshipContext.prototype.right_object = function() {
    return this.getTypedRuleContext(Right_objectContext,0);
};

RelationshipContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterRelationship(this);
	}
};

RelationshipContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitRelationship(this);
	}
};




GnosisEPLParser.RelationshipContext = RelationshipContext;

GnosisEPLParser.prototype.relationship = function() {

    var localctx = new RelationshipContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, GnosisEPLParser.RULE_relationship);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.left_object();
        this.state = 194;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GnosisEPLParser.T__0) | (1 << GnosisEPLParser.T__1) | (1 << GnosisEPLParser.T__2))) !== 0)) {
            this.state = 185;
            this.left_rel_direction();
            this.state = 186;
            this.match(GnosisEPLParser.LBRACK);
            this.state = 187;
            this.operator_type();
            this.state = 188;
            this.match(GnosisEPLParser.COLON);
            this.state = 189;
            this.query_operator();
            this.state = 190;
            this.match(GnosisEPLParser.RBRACK);
            this.state = 191;
            this.right_rel_direction();
            this.state = 192;
            this.right_object();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Left_objectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_left_object;
    return this;
}

Left_objectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Left_objectContext.prototype.constructor = Left_objectContext;

Left_objectContext.prototype.object_ref_with_class = function() {
    return this.getTypedRuleContext(Object_ref_with_classContext,0);
};

Left_objectContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterLeft_object(this);
	}
};

Left_objectContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitLeft_object(this);
	}
};




GnosisEPLParser.Left_objectContext = Left_objectContext;

GnosisEPLParser.prototype.left_object = function() {

    var localctx = new Left_objectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, GnosisEPLParser.RULE_left_object);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.object_ref_with_class();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Left_rel_directionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_left_rel_direction;
    return this;
}

Left_rel_directionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Left_rel_directionContext.prototype.constructor = Left_rel_directionContext;


Left_rel_directionContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterLeft_rel_direction(this);
	}
};

Left_rel_directionContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitLeft_rel_direction(this);
	}
};




GnosisEPLParser.Left_rel_directionContext = Left_rel_directionContext;

GnosisEPLParser.prototype.left_rel_direction = function() {

    var localctx = new Left_rel_directionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, GnosisEPLParser.RULE_left_rel_direction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GnosisEPLParser.T__0) | (1 << GnosisEPLParser.T__1) | (1 << GnosisEPLParser.T__2))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Right_rel_directionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_right_rel_direction;
    return this;
}

Right_rel_directionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Right_rel_directionContext.prototype.constructor = Right_rel_directionContext;


Right_rel_directionContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterRight_rel_direction(this);
	}
};

Right_rel_directionContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitRight_rel_direction(this);
	}
};




GnosisEPLParser.Right_rel_directionContext = Right_rel_directionContext;

GnosisEPLParser.prototype.right_rel_direction = function() {

    var localctx = new Right_rel_directionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, GnosisEPLParser.RULE_right_rel_direction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GnosisEPLParser.T__0) | (1 << GnosisEPLParser.T__1) | (1 << GnosisEPLParser.T__2))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Right_objectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_right_object;
    return this;
}

Right_objectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Right_objectContext.prototype.constructor = Right_objectContext;

Right_objectContext.prototype.object_ref_with_class = function() {
    return this.getTypedRuleContext(Object_ref_with_classContext,0);
};

Right_objectContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterRight_object(this);
	}
};

Right_objectContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitRight_object(this);
	}
};




GnosisEPLParser.Right_objectContext = Right_objectContext;

GnosisEPLParser.prototype.right_object = function() {

    var localctx = new Right_objectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, GnosisEPLParser.RULE_right_object);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.object_ref_with_class();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Object_ref_with_classContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_object_ref_with_class;
    return this;
}

Object_ref_with_classContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_ref_with_classContext.prototype.constructor = Object_ref_with_classContext;

Object_ref_with_classContext.prototype.LPAREN = function() {
    return this.getToken(GnosisEPLParser.LPAREN, 0);
};

Object_ref_with_classContext.prototype.object_ref = function() {
    return this.getTypedRuleContext(Object_refContext,0);
};

Object_ref_with_classContext.prototype.COLON = function() {
    return this.getToken(GnosisEPLParser.COLON, 0);
};

Object_ref_with_classContext.prototype.object_class = function() {
    return this.getTypedRuleContext(Object_classContext,0);
};

Object_ref_with_classContext.prototype.RPAREN = function() {
    return this.getToken(GnosisEPLParser.RPAREN, 0);
};

Object_ref_with_classContext.prototype.attributes = function() {
    return this.getTypedRuleContext(AttributesContext,0);
};

Object_ref_with_classContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


Object_ref_with_classContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterObject_ref_with_class(this);
	}
};

Object_ref_with_classContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitObject_ref_with_class(this);
	}
};




GnosisEPLParser.Object_ref_with_classContext = Object_ref_with_classContext;

GnosisEPLParser.prototype.object_ref_with_class = function() {

    var localctx = new Object_ref_with_classContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, GnosisEPLParser.RULE_object_ref_with_class);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(GnosisEPLParser.LPAREN);
        this.state = 205;
        this.object_ref();
        this.state = 206;
        this.match(GnosisEPLParser.COLON);
        this.state = 207;
        this.object_class();
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GnosisEPLParser.LCURLY || _la===GnosisEPLParser.WHITESPACE) {
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===GnosisEPLParser.WHITESPACE) {
                this.state = 208;
                this.match(GnosisEPLParser.WHITESPACE);
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 214;
            this.attributes();
        }

        this.state = 217;
        this.match(GnosisEPLParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Object_classContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_object_class;
    return this;
}

Object_classContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_classContext.prototype.constructor = Object_classContext;

Object_classContext.prototype.WORD = function() {
    return this.getToken(GnosisEPLParser.WORD, 0);
};

Object_classContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterObject_class(this);
	}
};

Object_classContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitObject_class(this);
	}
};




GnosisEPLParser.Object_classContext = Object_classContext;

GnosisEPLParser.prototype.object_class = function() {

    var localctx = new Object_classContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, GnosisEPLParser.RULE_object_class);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.match(GnosisEPLParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Object_refContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_object_ref;
    return this;
}

Object_refContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_refContext.prototype.constructor = Object_refContext;

Object_refContext.prototype.alphanumeric = function() {
    return this.getTypedRuleContext(AlphanumericContext,0);
};

Object_refContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterObject_ref(this);
	}
};

Object_refContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitObject_ref(this);
	}
};




GnosisEPLParser.Object_refContext = Object_refContext;

GnosisEPLParser.prototype.object_ref = function() {

    var localctx = new Object_refContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, GnosisEPLParser.RULE_object_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.alphanumeric();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AttributesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_attributes;
    return this;
}

AttributesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributesContext.prototype.constructor = AttributesContext;

AttributesContext.prototype.LCURLY = function() {
    return this.getToken(GnosisEPLParser.LCURLY, 0);
};

AttributesContext.prototype.attribute = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttributeContext);
    } else {
        return this.getTypedRuleContext(AttributeContext,i);
    }
};

AttributesContext.prototype.RCURLY = function() {
    return this.getToken(GnosisEPLParser.RCURLY, 0);
};

AttributesContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


AttributesContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.COMMA);
    } else {
        return this.getToken(GnosisEPLParser.COMMA, i);
    }
};


AttributesContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterAttributes(this);
	}
};

AttributesContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitAttributes(this);
	}
};




GnosisEPLParser.AttributesContext = AttributesContext;

GnosisEPLParser.prototype.attributes = function() {

    var localctx = new AttributesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, GnosisEPLParser.RULE_attributes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(GnosisEPLParser.LCURLY);
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GnosisEPLParser.WHITESPACE) {
            this.state = 224;
            this.match(GnosisEPLParser.WHITESPACE);
            this.state = 229;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 230;
        this.attribute();
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GnosisEPLParser.COMMA) {
            this.state = 239;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
            switch(la_) {
            case 1:
                this.state = 231;
                this.match(GnosisEPLParser.COMMA);
                break;

            case 2:
                this.state = 232;
                this.match(GnosisEPLParser.COMMA);
                this.state = 236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===GnosisEPLParser.WHITESPACE) {
                    this.state = 233;
                    this.match(GnosisEPLParser.WHITESPACE);
                    this.state = 238;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                break;

            }
            this.state = 241;
            this.attribute();
            this.state = 246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 250;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GnosisEPLParser.WHITESPACE) {
            this.state = 247;
            this.match(GnosisEPLParser.WHITESPACE);
            this.state = 252;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 253;
        this.match(GnosisEPLParser.RCURLY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_attribute;
    return this;
}

AttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeContext.prototype.constructor = AttributeContext;

AttributeContext.prototype.attribute_name = function() {
    return this.getTypedRuleContext(Attribute_nameContext,0);
};

AttributeContext.prototype.COLON = function() {
    return this.getToken(GnosisEPLParser.COLON, 0);
};

AttributeContext.prototype.attribute_value = function() {
    return this.getTypedRuleContext(Attribute_valueContext,0);
};

AttributeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterAttribute(this);
	}
};

AttributeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitAttribute(this);
	}
};




GnosisEPLParser.AttributeContext = AttributeContext;

GnosisEPLParser.prototype.attribute = function() {

    var localctx = new AttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, GnosisEPLParser.RULE_attribute);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.attribute_name();
        this.state = 256;
        this.match(GnosisEPLParser.COLON);
        this.state = 257;
        _la = this._input.LA(1);
        if(!(_la===GnosisEPLParser.T__3 || _la===GnosisEPLParser.T__4)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 258;
        this.attribute_value();
        this.state = 259;
        _la = this._input.LA(1);
        if(!(_la===GnosisEPLParser.T__3 || _la===GnosisEPLParser.T__4)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Attribute_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_attribute_name;
    return this;
}

Attribute_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attribute_nameContext.prototype.constructor = Attribute_nameContext;

Attribute_nameContext.prototype.WORD = function() {
    return this.getToken(GnosisEPLParser.WORD, 0);
};

Attribute_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterAttribute_name(this);
	}
};

Attribute_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitAttribute_name(this);
	}
};




GnosisEPLParser.Attribute_nameContext = Attribute_nameContext;

GnosisEPLParser.prototype.attribute_name = function() {

    var localctx = new Attribute_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, GnosisEPLParser.RULE_attribute_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.match(GnosisEPLParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Attribute_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_attribute_value;
    return this;
}

Attribute_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attribute_valueContext.prototype.constructor = Attribute_valueContext;

Attribute_valueContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WORD);
    } else {
        return this.getToken(GnosisEPLParser.WORD, i);
    }
};


Attribute_valueContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


Attribute_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterAttribute_value(this);
	}
};

Attribute_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitAttribute_value(this);
	}
};




GnosisEPLParser.Attribute_valueContext = Attribute_valueContext;

GnosisEPLParser.prototype.attribute_value = function() {

    var localctx = new Attribute_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, GnosisEPLParser.RULE_attribute_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 263;
            _la = this._input.LA(1);
            if(!(_la===GnosisEPLParser.WORD || _la===GnosisEPLParser.WHITESPACE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 266; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GnosisEPLParser.WORD || _la===GnosisEPLParser.WHITESPACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Operator_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_operator_type;
    return this;
}

Operator_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Operator_typeContext.prototype.constructor = Operator_typeContext;

Operator_typeContext.prototype.SPATIAL = function() {
    return this.getToken(GnosisEPLParser.SPATIAL, 0);
};

Operator_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterOperator_type(this);
	}
};

Operator_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitOperator_type(this);
	}
};




GnosisEPLParser.Operator_typeContext = Operator_typeContext;

GnosisEPLParser.prototype.operator_type = function() {

    var localctx = new Operator_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, GnosisEPLParser.RULE_operator_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(GnosisEPLParser.SPATIAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Query_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_query_operator;
    return this;
}

Query_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Query_operatorContext.prototype.constructor = Query_operatorContext;

Query_operatorContext.prototype.LEFT = function() {
    return this.getToken(GnosisEPLParser.LEFT, 0);
};

Query_operatorContext.prototype.RIGHT = function() {
    return this.getToken(GnosisEPLParser.RIGHT, 0);
};

Query_operatorContext.prototype.BACK = function() {
    return this.getToken(GnosisEPLParser.BACK, 0);
};

Query_operatorContext.prototype.FRONT = function() {
    return this.getToken(GnosisEPLParser.FRONT, 0);
};

Query_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterQuery_operator(this);
	}
};

Query_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitQuery_operator(this);
	}
};




GnosisEPLParser.Query_operatorContext = Query_operatorContext;

GnosisEPLParser.prototype.query_operator = function() {

    var localctx = new Query_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, GnosisEPLParser.RULE_query_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        _la = this._input.LA(1);
        if(!(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (GnosisEPLParser.LEFT - 35)) | (1 << (GnosisEPLParser.RIGHT - 35)) | (1 << (GnosisEPLParser.BACK - 35)) | (1 << (GnosisEPLParser.FRONT - 35)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Logical_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_logical_operator;
    return this;
}

Logical_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Logical_operatorContext.prototype.constructor = Logical_operatorContext;

Logical_operatorContext.prototype.AND = function() {
    return this.getToken(GnosisEPLParser.AND, 0);
};

Logical_operatorContext.prototype.OR = function() {
    return this.getToken(GnosisEPLParser.OR, 0);
};

Logical_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterLogical_operator(this);
	}
};

Logical_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitLogical_operator(this);
	}
};




GnosisEPLParser.Logical_operatorContext = Logical_operatorContext;

GnosisEPLParser.prototype.logical_operator = function() {

    var localctx = new Logical_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, GnosisEPLParser.RULE_logical_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        _la = this._input.LA(1);
        if(!(_la===GnosisEPLParser.AND || _la===GnosisEPLParser.OR)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Where_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_where_clause;
    return this;
}

Where_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Where_clauseContext.prototype.constructor = Where_clauseContext;

Where_clauseContext.prototype.FROM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.FROM);
    } else {
        return this.getToken(GnosisEPLParser.FROM, i);
    }
};


Where_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterWhere_clause(this);
	}
};

Where_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitWhere_clause(this);
	}
};




GnosisEPLParser.Where_clauseContext = Where_clauseContext;

GnosisEPLParser.prototype.where_clause = function() {

    var localctx = new Where_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, GnosisEPLParser.RULE_where_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.state = 277;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GnosisEPLParser.T__0) | (1 << GnosisEPLParser.T__1) | (1 << GnosisEPLParser.T__2) | (1 << GnosisEPLParser.T__3) | (1 << GnosisEPLParser.T__4) | (1 << GnosisEPLParser.T__5) | (1 << GnosisEPLParser.SEMI) | (1 << GnosisEPLParser.COLON) | (1 << GnosisEPLParser.DOT) | (1 << GnosisEPLParser.COMMA) | (1 << GnosisEPLParser.ASTERISK) | (1 << GnosisEPLParser.RPAREN) | (1 << GnosisEPLParser.LPAREN) | (1 << GnosisEPLParser.RBRACK) | (1 << GnosisEPLParser.LBRACK) | (1 << GnosisEPLParser.RCURLY) | (1 << GnosisEPLParser.LCURLY) | (1 << GnosisEPLParser.PLUS) | (1 << GnosisEPLParser.NEGATION) | (1 << GnosisEPLParser.VERTBAR) | (1 << GnosisEPLParser.BITAND) | (1 << GnosisEPLParser.POWER_OP) | (1 << GnosisEPLParser.GTH) | (1 << GnosisEPLParser.LTH) | (1 << GnosisEPLParser.UNDERSCORE) | (1 << GnosisEPLParser.EQUAL) | (1 << GnosisEPLParser.REGISTER) | (1 << GnosisEPLParser.QUERY) | (1 << GnosisEPLParser.OUTPUT) | (1 << GnosisEPLParser.CONTENT) | (1 << GnosisEPLParser.SELECT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GnosisEPLParser.MATCH - 32)) | (1 << (GnosisEPLParser.SPATIAL - 32)) | (1 << (GnosisEPLParser.TEMPORAL - 32)) | (1 << (GnosisEPLParser.LEFT - 32)) | (1 << (GnosisEPLParser.RIGHT - 32)) | (1 << (GnosisEPLParser.BACK - 32)) | (1 << (GnosisEPLParser.FRONT - 32)) | (1 << (GnosisEPLParser.AND - 32)) | (1 << (GnosisEPLParser.OR - 32)) | (1 << (GnosisEPLParser.WHERE - 32)) | (1 << (GnosisEPLParser.WITHIN - 32)) | (1 << (GnosisEPLParser.TUMLBING_TIME_WINDOW - 32)) | (1 << (GnosisEPLParser.TUMLBING_COUNT_WINDOW - 32)) | (1 << (GnosisEPLParser.SLIDING_TIME_WINDOW - 32)) | (1 << (GnosisEPLParser.SLIDING_COUNT_WINDOW - 32)) | (1 << (GnosisEPLParser.CONFIDENCE - 32)) | (1 << (GnosisEPLParser.WITH_QoS - 32)) | (1 << (GnosisEPLParser.RETURN - 32)) | (1 << (GnosisEPLParser.OPTIONAL - 32)) | (1 << (GnosisEPLParser.NUMBER - 32)) | (1 << (GnosisEPLParser.WORD - 32)) | (1 << (GnosisEPLParser.WHITESPACE - 32)) | (1 << (GnosisEPLParser.NEWLINE - 32)) | (1 << (GnosisEPLParser.EVERYTHING - 32)))) !== 0)) {
                this.state = 274;
                _la = this._input.LA(1);
                if(_la<=0 || _la===GnosisEPLParser.FROM) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.state = 280;
            this.match(GnosisEPLParser.T__3);
            break;

        case 3:
            this.state = 281;
            this.match(GnosisEPLParser.T__4);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PublisherContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_publisher;
    return this;
}

PublisherContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PublisherContext.prototype.constructor = PublisherContext;

PublisherContext.prototype.alphanumeric = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AlphanumericContext);
    } else {
        return this.getTypedRuleContext(AlphanumericContext,i);
    }
};

PublisherContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterPublisher(this);
	}
};

PublisherContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitPublisher(this);
	}
};




GnosisEPLParser.PublisherContext = PublisherContext;

GnosisEPLParser.prototype.publisher = function() {

    var localctx = new PublisherContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, GnosisEPLParser.RULE_publisher);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 286;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case GnosisEPLParser.NUMBER:
            case GnosisEPLParser.WORD:
                this.state = 284;
                this.alphanumeric();
                break;
            case GnosisEPLParser.T__5:
                this.state = 285;
                this.match(GnosisEPLParser.T__5);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 288; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GnosisEPLParser.T__5 || _la===GnosisEPLParser.NUMBER || _la===GnosisEPLParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WindowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_window;
    return this;
}

WindowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WindowContext.prototype.constructor = WindowContext;

WindowContext.prototype.window_type = function() {
    return this.getTypedRuleContext(Window_typeContext,0);
};

WindowContext.prototype.LPAREN = function() {
    return this.getToken(GnosisEPLParser.LPAREN, 0);
};

WindowContext.prototype.window_size = function() {
    return this.getTypedRuleContext(Window_sizeContext,0);
};

WindowContext.prototype.RPAREN = function() {
    return this.getToken(GnosisEPLParser.RPAREN, 0);
};

WindowContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterWindow(this);
	}
};

WindowContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitWindow(this);
	}
};




GnosisEPLParser.WindowContext = WindowContext;

GnosisEPLParser.prototype.window = function() {

    var localctx = new WindowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, GnosisEPLParser.RULE_window);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.window_type();
        this.state = 291;
        this.match(GnosisEPLParser.LPAREN);
        this.state = 292;
        this.window_size();
        this.state = 293;
        this.match(GnosisEPLParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Window_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_window_type;
    return this;
}

Window_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Window_typeContext.prototype.constructor = Window_typeContext;

Window_typeContext.prototype.TUMLBING_TIME_WINDOW = function() {
    return this.getToken(GnosisEPLParser.TUMLBING_TIME_WINDOW, 0);
};

Window_typeContext.prototype.TUMLBING_COUNT_WINDOW = function() {
    return this.getToken(GnosisEPLParser.TUMLBING_COUNT_WINDOW, 0);
};

Window_typeContext.prototype.SLIDING_TIME_WINDOW = function() {
    return this.getToken(GnosisEPLParser.SLIDING_TIME_WINDOW, 0);
};

Window_typeContext.prototype.SLIDING_COUNT_WINDOW = function() {
    return this.getToken(GnosisEPLParser.SLIDING_COUNT_WINDOW, 0);
};

Window_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterWindow_type(this);
	}
};

Window_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitWindow_type(this);
	}
};




GnosisEPLParser.Window_typeContext = Window_typeContext;

GnosisEPLParser.prototype.window_type = function() {

    var localctx = new Window_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, GnosisEPLParser.RULE_window_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        _la = this._input.LA(1);
        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (GnosisEPLParser.TUMLBING_TIME_WINDOW - 44)) | (1 << (GnosisEPLParser.TUMLBING_COUNT_WINDOW - 44)) | (1 << (GnosisEPLParser.SLIDING_TIME_WINDOW - 44)) | (1 << (GnosisEPLParser.SLIDING_COUNT_WINDOW - 44)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Window_sizeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_window_size;
    return this;
}

Window_sizeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Window_sizeContext.prototype.constructor = Window_sizeContext;

Window_sizeContext.prototype.window_length = function() {
    return this.getTypedRuleContext(Window_lengthContext,0);
};

Window_sizeContext.prototype.sliding_length = function() {
    return this.getTypedRuleContext(Sliding_lengthContext,0);
};

Window_sizeContext.prototype.COMMA = function() {
    return this.getToken(GnosisEPLParser.COMMA, 0);
};

Window_sizeContext.prototype.WHITESPACE = function() {
    return this.getToken(GnosisEPLParser.WHITESPACE, 0);
};

Window_sizeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterWindow_size(this);
	}
};

Window_sizeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitWindow_size(this);
	}
};




GnosisEPLParser.Window_sizeContext = Window_sizeContext;

GnosisEPLParser.prototype.window_size = function() {

    var localctx = new Window_sizeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, GnosisEPLParser.RULE_window_size);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        this.window_length();
        this.state = 304;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GnosisEPLParser.COMMA) {
            this.state = 301;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
            switch(la_) {
            case 1:
                this.state = 298;
                this.match(GnosisEPLParser.COMMA);
                break;

            case 2:
                this.state = 299;
                this.match(GnosisEPLParser.COMMA);
                this.state = 300;
                this.match(GnosisEPLParser.WHITESPACE);
                break;

            }
            this.state = 303;
            this.sliding_length();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Window_lengthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_window_length;
    return this;
}

Window_lengthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Window_lengthContext.prototype.constructor = Window_lengthContext;

Window_lengthContext.prototype.NUMBER = function() {
    return this.getToken(GnosisEPLParser.NUMBER, 0);
};

Window_lengthContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterWindow_length(this);
	}
};

Window_lengthContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitWindow_length(this);
	}
};




GnosisEPLParser.Window_lengthContext = Window_lengthContext;

GnosisEPLParser.prototype.window_length = function() {

    var localctx = new Window_lengthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, GnosisEPLParser.RULE_window_length);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        this.match(GnosisEPLParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Sliding_lengthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_sliding_length;
    return this;
}

Sliding_lengthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sliding_lengthContext.prototype.constructor = Sliding_lengthContext;

Sliding_lengthContext.prototype.NUMBER = function() {
    return this.getToken(GnosisEPLParser.NUMBER, 0);
};

Sliding_lengthContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterSliding_length(this);
	}
};

Sliding_lengthContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitSliding_length(this);
	}
};




GnosisEPLParser.Sliding_lengthContext = Sliding_lengthContext;

GnosisEPLParser.prototype.sliding_length = function() {

    var localctx = new Sliding_lengthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, GnosisEPLParser.RULE_sliding_length);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this.match(GnosisEPLParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Metric_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_metric_list;
    return this;
}

Metric_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Metric_listContext.prototype.constructor = Metric_listContext;

Metric_listContext.prototype.metric = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MetricContext);
    } else {
        return this.getTypedRuleContext(MetricContext,i);
    }
};

Metric_listContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.COMMA);
    } else {
        return this.getToken(GnosisEPLParser.COMMA, i);
    }
};


Metric_listContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


Metric_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterMetric_list(this);
	}
};

Metric_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitMetric_list(this);
	}
};




GnosisEPLParser.Metric_listContext = Metric_listContext;

GnosisEPLParser.prototype.metric_list = function() {

    var localctx = new Metric_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, GnosisEPLParser.RULE_metric_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        this.metric();
        this.state = 319;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GnosisEPLParser.COMMA) {
            this.state = 314;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
            switch(la_) {
            case 1:
                this.state = 311;
                this.match(GnosisEPLParser.COMMA);
                break;

            case 2:
                this.state = 312;
                this.match(GnosisEPLParser.COMMA);
                this.state = 313;
                this.match(GnosisEPLParser.WHITESPACE);
                break;

            }
            this.state = 316;
            this.metric();
            this.state = 321;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MetricContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_metric;
    return this;
}

MetricContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetricContext.prototype.constructor = MetricContext;

MetricContext.prototype.metric_name = function() {
    return this.getTypedRuleContext(Metric_nameContext,0);
};

MetricContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


MetricContext.prototype.comparison_operator = function() {
    return this.getTypedRuleContext(Comparison_operatorContext,0);
};

MetricContext.prototype.metric_value = function() {
    return this.getTypedRuleContext(Metric_valueContext,0);
};

MetricContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterMetric(this);
	}
};

MetricContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitMetric(this);
	}
};




GnosisEPLParser.MetricContext = MetricContext;

GnosisEPLParser.prototype.metric = function() {

    var localctx = new MetricContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, GnosisEPLParser.RULE_metric);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        this.metric_name();
        this.state = 323;
        this.match(GnosisEPLParser.WHITESPACE);
        this.state = 324;
        this.comparison_operator();
        this.state = 325;
        this.match(GnosisEPLParser.WHITESPACE);
        this.state = 326;
        this.metric_value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Metric_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_metric_name;
    return this;
}

Metric_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Metric_nameContext.prototype.constructor = Metric_nameContext;

Metric_nameContext.prototype.CONFIDENCE = function() {
    return this.getToken(GnosisEPLParser.CONFIDENCE, 0);
};

Metric_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterMetric_name(this);
	}
};

Metric_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitMetric_name(this);
	}
};




GnosisEPLParser.Metric_nameContext = Metric_nameContext;

GnosisEPLParser.prototype.metric_name = function() {

    var localctx = new Metric_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, GnosisEPLParser.RULE_metric_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
        this.match(GnosisEPLParser.CONFIDENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Metric_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_metric_value;
    return this;
}

Metric_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Metric_valueContext.prototype.constructor = Metric_valueContext;

Metric_valueContext.prototype.NUMBER = function() {
    return this.getToken(GnosisEPLParser.NUMBER, 0);
};

Metric_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterMetric_value(this);
	}
};

Metric_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitMetric_value(this);
	}
};




GnosisEPLParser.Metric_valueContext = Metric_valueContext;

GnosisEPLParser.prototype.metric_value = function() {

    var localctx = new Metric_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, GnosisEPLParser.RULE_metric_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(GnosisEPLParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Node_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_node_list;
    return this;
}

Node_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Node_listContext.prototype.constructor = Node_listContext;

Node_listContext.prototype.node = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NodeContext);
    } else {
        return this.getTypedRuleContext(NodeContext,i);
    }
};

Node_listContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.COMMA);
    } else {
        return this.getToken(GnosisEPLParser.COMMA, i);
    }
};


Node_listContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.WHITESPACE);
    } else {
        return this.getToken(GnosisEPLParser.WHITESPACE, i);
    }
};


Node_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterNode_list(this);
	}
};

Node_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitNode_list(this);
	}
};




GnosisEPLParser.Node_listContext = Node_listContext;

GnosisEPLParser.prototype.node_list = function() {

    var localctx = new Node_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, GnosisEPLParser.RULE_node_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.node();
        this.state = 341;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GnosisEPLParser.COMMA) {
            this.state = 336;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
            switch(la_) {
            case 1:
                this.state = 333;
                this.match(GnosisEPLParser.COMMA);
                break;

            case 2:
                this.state = 334;
                this.match(GnosisEPLParser.COMMA);
                this.state = 335;
                this.match(GnosisEPLParser.WHITESPACE);
                break;

            }
            this.state = 338;
            this.node();
            this.state = 343;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GnosisEPLParser.RULE_node;
    return this;
}

NodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NodeContext.prototype.constructor = NodeContext;

NodeContext.prototype.alphanumeric = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AlphanumericContext);
    } else {
        return this.getTypedRuleContext(AlphanumericContext,i);
    }
};

NodeContext.prototype.ASTERISK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GnosisEPLParser.ASTERISK);
    } else {
        return this.getToken(GnosisEPLParser.ASTERISK, i);
    }
};


NodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.enterNode(this);
	}
};

NodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GnosisEPLListener ) {
        listener.exitNode(this);
	}
};




GnosisEPLParser.NodeContext = NodeContext;

GnosisEPLParser.prototype.node = function() {

    var localctx = new NodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, GnosisEPLParser.RULE_node);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 346;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case GnosisEPLParser.NUMBER:
            case GnosisEPLParser.WORD:
                this.state = 344;
                this.alphanumeric();
                break;
            case GnosisEPLParser.ASTERISK:
                this.state = 345;
                this.match(GnosisEPLParser.ASTERISK);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 348; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GnosisEPLParser.ASTERISK || _la===GnosisEPLParser.NUMBER || _la===GnosisEPLParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.GnosisEPLParser = GnosisEPLParser;
