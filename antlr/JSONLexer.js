"use strict";
// Generated from hellots/JSON.g4 by ANTLR 4.7.3-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = __importStar(require("antlr4ts/misc/Utils"));
var JSONLexer = /** @class */ (function (_super) {
    __extends(JSONLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function JSONLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(JSONLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(JSONLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return JSONLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JSONLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "JSON.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JSONLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return JSONLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JSONLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return JSONLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JSONLexer.prototype, "channelNames", {
        // @Override
        get: function () { return JSONLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JSONLexer.prototype, "modeNames", {
        // @Override
        get: function () { return JSONLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JSONLexer, "_ATN", {
        get: function () {
            if (!JSONLexer.__ATN) {
                JSONLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(JSONLexer._serializedATN));
            }
            return JSONLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    JSONLexer.T__0 = 1;
    JSONLexer.T__1 = 2;
    JSONLexer.T__2 = 3;
    JSONLexer.T__3 = 4;
    JSONLexer.T__4 = 5;
    JSONLexer.T__5 = 6;
    JSONLexer.T__6 = 7;
    JSONLexer.T__7 = 8;
    JSONLexer.T__8 = 9;
    JSONLexer.STRING = 10;
    JSONLexer.NUMBER = 11;
    JSONLexer.WS = 12;
    // tslint:disable:no-trailing-whitespace
    JSONLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    JSONLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    JSONLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
        "STRING", "ESC", "UNICODE", "HEX", "SAFECODEPOINT", "NUMBER", "INT", "EXP",
        "WS",
    ];
    JSONLexer._LITERAL_NAMES = [
        undefined, "'{'", "','", "'}'", "':'", "'['", "']'", "'true'", "'false'",
        "'null'",
    ];
    JSONLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "STRING", "NUMBER", "WS",
    ];
    JSONLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(JSONLexer._LITERAL_NAMES, JSONLexer._SYMBOLIC_NAMES, []);
    JSONLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E\x82\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
        "\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
        "\v\x03\v\x03\v\x07\vG\n\v\f\v\x0E\vJ\v\v\x03\v\x03\v\x03\f\x03\f\x03\f" +
        "\x05\fQ\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F" +
        "\x03\x0F\x03\x10\x05\x10^\n\x10\x03\x10\x03\x10\x03\x10\x06\x10c\n\x10" +
        "\r\x10\x0E\x10d\x05\x10g\n\x10\x03\x10\x05\x10j\n\x10\x03\x11\x03\x11" +
        "\x03\x11\x07\x11o\n\x11\f\x11\x0E\x11r\v\x11\x05\x11t\n\x11\x03\x12\x03" +
        "\x12\x05\x12x\n\x12\x03\x12\x03\x12\x03\x13\x06\x13}\n\x13\r\x13\x0E\x13" +
        "~\x03\x13\x03\x13\x02\x02\x02\x14\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
        "\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
        "\x02\x02\x19\x02\x02\x1B\x02\x02\x1D\x02\x02\x1F\x02\r!\x02\x02#\x02\x02" +
        "%\x02\x0E\x03\x02\n\n\x02$$11^^ddhhppttvv\x05\x022;CHch\x05\x02\x02!$" +
        "$^^\x03\x022;\x03\x023;\x04\x02GGgg\x04\x02--//\x05\x02\v\f\x0F\x0F\"" +
        "\"\x02\x86\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
        "\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
        "\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
        "\x02\x02\x02\x15\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02%\x03\x02" +
        "\x02\x02\x03\'\x03\x02\x02\x02\x05)\x03\x02\x02\x02\x07+\x03\x02\x02\x02" +
        "\t-\x03\x02\x02\x02\v/\x03\x02\x02\x02\r1\x03\x02\x02\x02\x0F3\x03\x02" +
        "\x02\x02\x118\x03\x02\x02\x02\x13>\x03\x02\x02\x02\x15C\x03\x02\x02\x02" +
        "\x17M\x03\x02\x02\x02\x19R\x03\x02\x02\x02\x1BX\x03\x02\x02\x02\x1DZ\x03" +
        "\x02\x02\x02\x1F]\x03\x02\x02\x02!s\x03\x02\x02\x02#u\x03\x02\x02\x02" +
        "%|\x03\x02\x02\x02\'(\x07}\x02\x02(\x04\x03\x02\x02\x02)*\x07.\x02\x02" +
        "*\x06\x03\x02\x02\x02+,\x07\x7F\x02\x02,\b\x03\x02\x02\x02-.\x07<\x02" +
        "\x02.\n\x03\x02\x02\x02/0\x07]\x02\x020\f\x03\x02\x02\x0212\x07_\x02\x02" +
        "2\x0E\x03\x02\x02\x0234\x07v\x02\x0245\x07t\x02\x0256\x07w\x02\x0267\x07" +
        "g\x02\x027\x10\x03\x02\x02\x0289\x07h\x02\x029:\x07c\x02\x02:;\x07n\x02" +
        "\x02;<\x07u\x02\x02<=\x07g\x02\x02=\x12\x03\x02\x02\x02>?\x07p\x02\x02" +
        "?@\x07w\x02\x02@A\x07n\x02\x02AB\x07n\x02\x02B\x14\x03\x02\x02\x02CH\x07" +
        "$\x02\x02DG\x05\x17\f\x02EG\x05\x1D\x0F\x02FD\x03\x02\x02\x02FE\x03\x02" +
        "\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IK\x03\x02" +
        "\x02\x02JH\x03\x02\x02\x02KL\x07$\x02\x02L\x16\x03\x02\x02\x02MP\x07^" +
        "\x02\x02NQ\t\x02\x02\x02OQ\x05\x19\r\x02PN\x03\x02\x02\x02PO\x03\x02\x02" +
        "\x02Q\x18\x03\x02\x02\x02RS\x07w\x02\x02ST\x05\x1B\x0E\x02TU\x05\x1B\x0E" +
        "\x02UV\x05\x1B\x0E\x02VW\x05\x1B\x0E\x02W\x1A\x03\x02\x02\x02XY\t\x03" +
        "\x02\x02Y\x1C\x03\x02\x02\x02Z[\n\x04\x02\x02[\x1E\x03\x02\x02\x02\\^" +
        "\x07/\x02\x02]\\\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x03\x02\x02\x02_" +
        "f\x05!\x11\x02`b\x070\x02\x02ac\t\x05\x02\x02ba\x03\x02\x02\x02cd\x03" +
        "\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02eg\x03\x02\x02\x02f`\x03" +
        "\x02\x02\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hj\x05#\x12\x02ih\x03" +
        "\x02\x02\x02ij\x03\x02\x02\x02j \x03\x02\x02\x02kt\x072\x02\x02lp\t\x06" +
        "\x02\x02mo\t\x05\x02\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02" +
        "\x02\x02pq\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02sk\x03\x02" +
        "\x02\x02sl\x03\x02\x02\x02t\"\x03\x02\x02\x02uw\t\x07\x02\x02vx\t\b\x02" +
        "\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02yz\x05!\x11" +
        "\x02z$\x03\x02\x02\x02{}\t\t\x02\x02|{\x03\x02\x02\x02}~\x03\x02\x02\x02" +
        "~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81" +
        "\b\x13\x02\x02\x81&\x03\x02\x02\x02\x0E\x02FHP]dfipsw~\x03\b\x02\x02";
    return JSONLexer;
}(Lexer_1.Lexer));
exports.JSONLexer = JSONLexer;
