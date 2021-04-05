//=============================================================================\\
//                             ConsoleSpammer.JS                                \\
//                             made by nullcheats                                \\
//================================================================================\\

/*
Here we have 4 simple variables that control how the console logger runs
Loop bool will decide if it should keep sending messages (True | false) | 
ClearConsole bool will determine if a message should or shouldn't be removed within the Loop bool
Delay is the amount of Milliseconds each console log should take before logging again (1,000 MS = 1 second)
ConsoleMessages is an empty array that we will store our Console messages into
*/
let Loop = false; // By default this is set to true to "spam the console"
let ClearConsole = true; //  By default this is set to false as we do not want to clear previous console logs
let Delay = 50; // Default delay is 1,000 MS (1 second) between console logging
var ConsoleMessages = []; // This is an empty array , we use arrays so we can select at random easier

/*
This is the main function used to send messages to the "Console"
Depending on the configuration of the variables set this function will do 1 of 2 things as seen below
Option 1: The function will send messages to the console continuously and either clear the messages or keep them
Option 2: The function will send a single message to the console
*/
const StartLogger = () => {
    if (Loop == true) {
        setInterval(function() {
            if (ClearConsole == true) {
                console.clear();
            }
            var Cmessage = ConsoleMessages[Math.floor(Math.random() * ConsoleMessages.length)];
            console.log(Cmessage);
        }, Delay);
    } else {
        var Cmessage = ConsoleMessages[Math.floor(Math.random() * ConsoleMessages.length)];
        console.log(Cmessage);
    }
}

/*
This is a very simple function that will simply load messages into an array upon website "Load"
This invoked in the main body HTML "onLoad" event
Here you can add or remove messages from the array , The strings shown might look weird as they are "Escaped ascii" art 
If you decide to use any multi-line strings or Ascii-chars you should escape the string !
As you can see at least 1 console message is needed within the array to be able to "send" messages to the console
*/
const LoadMessages = () => {
    ConsoleMessages.push(".mm\r\n                      .mMMM       .mmmm.\r\n                     /MMMMM    .mMMMMMM)\r\n                    /MMMMMM.  .mMMMMM\"'\r\n                    MMMMMMM| ,MMMMMMM'\r\n                    MMMMMMM| mMMMMM'\r\n                    \\MMMMMMMSsMMM/'\r\n                    `MMM.sSSSSsMsSs\r\n                   .. /SSSSSSSSsSSSs.\r\n                  (SSss.SSSSSS/SSSSSSs,\r\n                   `SSSSsSSS'SS/sSSS\"S)\r\n                    SSSSSSSNNNNn.SSSss,\r\n                   (SSSSSSSsNNNNN)SSSSs,__\r\n                   `\"SSSsSSSSs~N~sSSSSS)MMMMmmm\r\n                      SSSSSSSSSS\\SSSS\"mMMMMMMMMMMm..        .mM|\r\n                  mmMMmSSSSSSS\"mMMMMMMMMMMMMMMMMMMMMMMmm.mmmMMMM)\r\n\\Mm..        mmMMMMMMMMMmmmmmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmMM\r\n \\MMMmm.mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM/\"      \"`MMMMMMMMmMM/\r\n |MMMMMMmMMMMMMMMMMMMMMMMMM\"\"\"\"\"MMMMMMMMMMM|         \\MMMMMMMMMM'\r\n  M\\MMMMMMMMMMMMMMMMMMM\"'          `.MMMMM(           \\MMMMMMMM/\r\n  \\MmMMMMMMMMMMMMMMMM\"'               `.MM/            \\MMMMMMM/\r\n   \\MMmMMMMMMMMMMMMM/                   `M|             )MMMMMM\r\n    \\MMMMMMMMMMMMMMM'                    \"               MMMMM/\r\n    |MMMMMMMMMMMMMM/                                     MMMM/\r\n     \\MMMMMMMMMMMMM(                                     MMMM'\r\n      \\MMMMMMMMMMMM|                         ...         MMM/\r\n       \\MMMMMMMMMMMM\\                  .o.   OOOo       )MMM'\r\n       `MMMMMMMMMMMMM.                oOOO   OOOOo      /MM/\r\n        \\MMMMMMMMMMMMM\\              (OOOO   `OOOO     /MMM/\r\n         \\MMMMMMM\"\"\"\"MM\\.             OOOO  ___`\"'    ,mMMM(_\r\n          \\MMMM/       \"-.             \".**\"'  )***   /      '.\r\n           \\MM(                   .-'- (**(   .**** .----,.   )\r\n            \\M(                   `    (*********/    /   '  /\r\n             \\`.       ..-----\\          \"\"\"\"\"\"      /      /\r\n              ``.     `    `\\.                     ,'     /'\r\n                \\.           `\\.                .-'    ,/'\r\n                  `\\.           `-._________--'      .'\r\n                     ``-..                     /  _,'\r\n                          \"\"`--____\\.       ,/'\"\"\"\r\n                                    `\\____/'");
    ConsoleMessages.push("           ___\r\n     _..--\"\\  `|`\"\"--.._\r\n  .-'       \\  |        `'-.\r\n /           \\_|___...----'`\\\r\n|__,,..--\"\"``(_)--..__      |\r\n'\\     _.--'`.I._     ''--..'\r\n  `''\"`,#JGS/_|_\\###,---'`\r\n    ,#'  _.:`___`:-._ '#,\r\n   #'  ,~'-;(oIo);-'~, '#\r\n   #   `~-(  |    )=~`  #\r\n   #       | |_  |      #\r\n   #       ; ._. ;      #\r\n   #  _..-;|\\ - /|;-._  #\r\n   #-'   /_ \\\\_// _\\  '-#\r\n /`#    ; /__\\-'__\\;    #`\\\r\n;  #\\.--|  |O  O   |'-./#  ;\r\n|__#/   \\ _;O__O___/   \\#__|\r\n | #\\    [I_[_]__I]    /# |\r\n \\_(#   /  |O  O   \\   #)_/\r\n       /   |        \\\r\n      /    |         \\\r\n     /    /\\          \\\r\n    /     | `\\         ;\r\n   ;      \\   '.       |\r\n    \\-._.__\\     \\_..-'/\r\n     '.\\  \\-.._.-/  /'`\r\n        \\_.\\    /._/\r\n         \\_.;  ;._/\r\n       .-'-./  \\.-'-.\r\n      (___.'    '.___)");
    ConsoleMessages.push(" |\\/\\/\\/|  \r\n |      |  \r\n |      |  \r\n | (o)(o)  \r\n C      _) \r\n  | ,___|  \r\n  |   /    \r\n /____\\    \r\n/      \\");
    ConsoleMessages.push("/\\ /\\  /\\      \r\n| V  \\/  \\---. \r\n \\_        /   \r\n  (o)(o)  <__. \r\n _C         /  \r\n/____,   )  \\  \r\n  \\     /----' \r\n   ooooo       \r\n  /     \\");
    ConsoleMessages.push("    ___\r\n   //_\\\\_\r\n .\"\\\\    \".\r\n/          \\\r\n|           \\_\r\n|       ,--.-.)\r\n \\     /  o \\o\\\r\n /\\/\\  \\    /_/\r\n  (_.   `--'__)\r\n   |     .-'  \\\r\n   |  .-'.     )\r\n   | (  _/--.-'\r\n   |  `.___.'\r\n         (");
    ConsoleMessages.push("            (####)\r\n          (#######)\r\n        (#########)\r\n       (#########)\r\n      (#########)\r\n     (#########)\r\n    (#########)\r\n   (#########)\r\n  (#########) \r\n   (o)(o)(##)\r\n ,_C     (##)\r\n/___,   (##)    \r\n  \\     (#) \r\n   |    |   \r\n   OOOOOO  \r\n  /      \\");
    ConsoleMessages.push("      .sS$$$$$$$$$$$$$$Ss.\r\n     .$$$$$$$$$$$$$$$$$$$$$$s.\r\n     $$$$$$$$$$$$$$$$$$$$$$$$S.\r\n     $$$$$$$$$$$$$$$$$$$$$$$$$$s.\r\n     S$$$$'        `$$$$$$$$$$$$$\r\n     `$$'            `$$$$$$$$$$$.\r\n      :               `$$$$$$$$$$$\r\n     :                 `$$$$$$$$$$\r\n  .====.  ,=====.       $$$$$$$$$$\r\n.'      ~'       \".    s$$$$$$$$$$\r\n:       :         :=_  $$$$$$$$$$$\r\n`.  ()  :   ()    ' ~=$$$$$$$$$$$'\r\n  ~====~`.      .'    $$$$$$$$$$$\r\n   .'     ~====~     sS$$$$$$$$$'\r\n   :      .         $$$$$' $$$$\r\n .sS$$$$$$$$Ss.     `$$'   $$$'\r\n$$$$$$$$$$$$$$$s         s$$$$\r\n$SSSSSSSSSSSSSSS$        $$$$$\r\n     :                   $$$$'\r\n      `.                 $$$'\r\n        `.               :\r\n         :               :\r\n         :              .'`.\r\n        .'.           .'   :\r\n       : .$s.       .'    .'\r\n       :.S$$$S.   .'    .'\r\n       : $$$$$$`.'    .'\r\n          $$$$   `. .'");
    ConsoleMessages.push("      .--..--..--..--..--..--.\r\n    .' \\  (`._   (_)     _   \\\r\n  .'    |  '._)         (_)  |\r\n  \\ _.')\\      .----..---.   /\r\n  |(_.'  |    /    .-\\-.  \\  |\r\n  \\     0|    |   ( O| O) | o|\r\n   |  _  |  .--.____.'._.-.  |\r\n   \\ (_) | o         -` .-`  |\r\n    |    \\   |`-._ _ _ _ _\\ /\r\n    \\    |   |  `. |_||_|   |\r\n    | o  |    \\_      \\     |     -.   .-.\r\n    |.-.  \\     `--..-'   O |     `.`-' .'\r\n  _.'  .' |     `-.-'      /-.__   ' .-'\r\n.' `-.` '.|='=.='=.='=.='=|._/_ `-'.'\r\n`-._  `.  |________/\\_____|    `-.'\r\n   .'   ).| '=' '='\\/ '=' |\r\n   `._.`  '---------------'\r\n           //___\\   //___\\\r\n             ||       ||\r\n    LGB      ||_.-.   ||_.-.\r\n            (_.--__) (_.--__)");
    ConsoleMessages.push("        .--'''''''''--.\r\n     .'      .---.      '.\r\n    /    .-----------.    \\\r\n   /        .-----.        \\\r\n   |       .-.   .-.       |\r\n   |      /   \\ /   \\      |\r\n    \\    | .-. | .-. |    /\r\n     '-._| | | | | | |_.-'\r\n         | '-' | '-' |\r\n          \\___/ \\___/\r\n       _.-'  /   \\  `-._\r\n     .' _.--|     |--._ '.\r\n     ' _...-|     |-..._ '\r\n            |     |\r\n            '.___.'\r\n              | |\r\n             _| |_\r\n            /\\( )/\\\r\n           /  ` '  \\\r\n          | |     | |\r\n          '-'     '-'\r\n          | |     | |\r\n          | |     | |\r\n          | |-----| |\r\n       .`/  |     | |/`.\r\n       |    |     |    |\r\n       '._.'| .-. |'._.'\r\n             \\ | /\r\n             | | |\r\n             | | |\r\n             | | |\r\n            /| | |\\\r\n          .'_| | |_`.\r\nLGB       `. | | | .'\r\n       .    /  |  \\    .\r\n      /o`.-'  / \\  `-.`o\\\r\n     /o  o\\ .'   `. /o  o\\\r\n     `.___.'       `.___.'");
    ConsoleMessages.push("        _          __________                              _,\r\n     _.-(_)._     .\"          \".      .--\"\"--.          _.-{__}-._\r\n   .'________'.   | .--------. |    .'        '.      .:-'`____`'-:.\r\n  [____________] /` |________| `\\  /   .'``'.   \\    /_.-\"`_  _`\"-._\\\r\n  /  / .\\/. \\  \\|  / / .\\/. \\ \\  ||  .'/.\\/.\\'.  |  /`   / .\\/. \\   `\\\r\n  |  \\__/\\__/  |\\_/  \\__/\\__/  \\_/|  : |_/\\_| ;  |  |    \\__/\\__/    |\r\n  \\            /  \\            /   \\ '.\\    /.' / .-\\                /-.\r\n  /'._  --  _.'\\  /'._  --  _.'\\   /'. `'--'` .'\\/   '._-.__--__.-_.'   \\\r\n /_   `\"\"\"\"`   _\\/_   `\"\"\"\"`   _\\ /_  `-./\\.-'  _\\'.    `\"\"\"\"\"\"\"\"`    .'`\\\r\n(__/    '|    \\ _)_|           |_)_/            \\__)|        '       |   |\r\n  |_____'|_____|   \\__________/   |              |;`_________'________`;-'\r\njgs'----------'    '----------'   '--------------'`--------------------`\r\n     S T A N          K Y L E        K E N N Y         C A R T M A N");
    ConsoleMessages.push(".______________________________________________________|_._._._._._._._._._.\r\n \\_____________________________________________________|_#_#_#_#_#_#_#_#_#_|\r\n                                                       l");
    ConsoleMessages.push("Carizard\r\n                 .\"-,.__\r\n                 `.     `.  ,\r\n              .--'  .._,'\"-' `.\r\n             .    .'         `'\r\n             `.   /          ,'\r\n               `  '--.   ,-\"'\r\n                `\"`   |  \\\r\n                   -. \\, |\r\n                    `--Y.'      ___.\r\n                         \\     L._, \\\r\n               _.,        `.   <  <\\                _\r\n             ,' '           `, `.   | \\            ( `\r\n          ../, `.            `  |    .\\`.           \\ \\_\r\n         ,' ,..  .           _.,'    ||\\l            )  '\".\r\n        , ,'   \\           ,'.-.`-._,'  |           .  _._`.\r\n      ,' /      \\ \\        `' ' `--/   | \\          / /   ..\\\r\n    .'  /        \\ .         |\\__ - _ ,'` `        / /     `.`.\r\n    |  '          ..         `-...-\"  |  `-'      / /        . `.\r\n    | /           |L__           |    |          / /          `. `.\r\n   , /            .   .          |    |         / /             ` `\r\n  / /          ,. ,`._ `-_       |    |  _   ,-' /               ` \\\r\n / .           \\\"`_/. `-_ \\_,.  ,'    +-' `-'  _,        ..,-.    \\`.\r\n.  '         .-f    ,'   `    '.       \\__.---'     _   .'   '     \\ \\\r\n' /          `.'    l     .' /          \\..      ,_|/   `.  ,'`     L`\r\n|'      _.-\"\"` `.    \\ _,'  `            \\ `.___`.'\"`-.  , |   |    | \\\r\n||    ,'      `. `.   '       _,...._        `  |    `/ '  |   '     .|\r\n||  ,'          `. ;.,.---' ,'       `.   `.. `-'  .-' /_ .'    ;_   ||\r\n|| '              V      / /           `   | `   ,'   ,' '.    !  `. ||\r\n||/            _,-------7 '              . |  `-'    l         /    `||\r\n. |          ,' .-   ,' ||               | .-.        `.      .'     ||\r\n `'        ,'    `\".'    |               |    `.        '. -.'       `'\r\n          /      ,'      |               |,'    \\-.._,.'/'\r\n          .     /        .               .       \\    .''\r\n        .`.    |         `.             /         :_,'.'\r\n          \\ `...\\   _     ,'-.        .'         /_.-'\r\n           `-.__ `,  `'   .  _.>----''.  _  __  /\r\n                .'        /\"'          |  \"'   '_\r\n               /_|.-'\\ ,\".             '.'`__'-( \\\r\n                 / ,\"'\"\\,'               `/  `-.|\" mh");
    ConsoleMessages.push("\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2800\u2800\u2800\u28B0\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28E7\u28C0\u28C0\u28FE\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u284F\u2809\u281B\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2808\u281B\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u283F\u281B\u2809\u2801\u2800\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28E7\u2840\u2800\u2800\u2800\u2800\u2819\u283F\u283F\u283F\u283B\u283F\u283F\u281F\u283F\u281B\u2809\u2800\u2800\u2800\u2800\u2800\u28F8\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28C4\u2800\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2880\u28F4\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u280F\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2820\u28F4\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u285F\u2800\u2800\u28B0\u28F9\u2846\u2800\u2800\u2800\u2800\u2800\u2800\u28ED\u28F7\u2800\u2800\u2800\u2838\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2803\u2800\u2800\u2808\u2809\u2800\u2800\u2824\u2804\u2800\u2800\u2800\u2809\u2801\u2800\u2800\u2800\u2800\u28BF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28BE\u28FF\u28F7\u2800\u2800\u2800\u2800\u2860\u2824\u2884\u2800\u2800\u2800\u2820\u28FF\u28FF\u28F7\u2800\u28B8\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2840\u2809\u2800\u2800\u2800\u2800\u2800\u2884\u2800\u2880\u2800\u2800\u2800\u2800\u2809\u2809\u2801\u2800\u2800\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28E7\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28B9\u28FF\u28FF");
    ConsoleMessages.push("                                  _______\r\n     ___________________________.'.------`\r\n    '---------------------------.'\r\n      `.                      .'\r\n    .-//`.                  .'\r\n .' .//.'/`================'\r\n=[=:====:=]=           \\\\||\r\n '. `--' .' LGB         \\_|\r\n   `-  -'");
    ConsoleMessages.push(" ****     **          **  **         **                          **          \r\n/**/**   /**         /** /**        /**                         /**          \r\n/**//**  /** **   ** /** /**  ***** /**       *****   ******   ******  ******\r\n/** //** /**/**  /** /** /** **///**/******  **///** //////** ///**/  **//// \r\n/**  //**/**/**  /** /** /**/**  // /**///**/*******  *******   /**  //***** \r\n/**   //****/**  /** /** /**/**   **/**  /**/**////  **////**   /**   /////**\r\n/**    //***//****** *** ***//***** /**  /**//******//********  //**  ****** \r\n//      ///  ////// /// ///  /////  //   //  //////  ////////    //  //////  ");
    if (ConsoleMessages.length > 0) {
        StartLogger();
    }
}