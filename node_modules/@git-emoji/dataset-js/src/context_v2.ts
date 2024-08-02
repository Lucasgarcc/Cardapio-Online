import { emoji as e } from './emoji';
import { type ContextEntry } from './context';

export const contextV2: ContextEntry[] = [
    {
        keyword: [
            'bogus',
            'bug',
            'bugfix',
        ],
        emoji: [
            e._beetle /*🐞*/,
            e._bug /*🐛*/,
        ],
    },
    {
        keyword: [
            'amend',
            'change',
            'construct',
            'correct',
            'establish',
            'fix',
            'implement',
            'patch',
            'reestablish',
            'refactor',
            'reimplement',
            'repair',
            'rewrite',
        ],
        emoji: [
            e._hammer /*🔨*/,
            e._hammer_and_pick /*⚒*/,
            e._hammer_and_wrench /*🛠*/,
            e._wrench /*🔧*/,
        ],
    },
    {
        keyword: [
            'erroneous',
            'faulty',
            'foul',
            'incorrect',
            'wrong',
        ],
        emoji: [
            e._no_entry /*⛔️*/,
            e._no_entry_sign /*🚫*/,
        ],
    },
    {
        keyword: [
            'archive',
            'box',
            'contain',
            'container',
            'dependency',
            'dependent',
            'library',
            'package',
        ],
        emoji: [
            e._card_file_box /*🗃*/,
            e._package /*📦*/,
        ],
    },

    //
    {
        keyword: [
            'cover',
            'hold',
            'safe',
            'shell',
            'wrap',
        ],
        emoji: [
            e._ballot_box /*🗳*/,
            e._card_file_box /*🗃*/,
            e._gift /*🎁*/,
            e._inbox_tray /*📥*/,
            e._open_hands /*👐*/,
            e._outbox_tray /*📤*/,
            e._package /*📦*/,
            e._shell /*🐚*/,
        ],
    },

    {
        keyword: [
            'attach',
        ],
        emoji: [
            e._paperclip /*📎*/,
            e._paperclips /*🖇*/,
        ],
    },
    {
        keyword: [
            'combine',
            'convolve',
            'distill',
            'merge',
            'mix',
        ],
        emoji: [
            e._busts_in_silhouette /*👥*/,
            e._performing_arts /*🎭*/,
        ],
    },
    {
        keyword: [
            'handshake',
            'introduce',
            'unify',
            'unite',
        ],
        emoji: [
            e._clinking_glasses /*🥂*/,
            e._handshake /*🤝*/,
        ],
    },
    {
        keyword: [
            'add',
            'append',
            'insert',
            'postfix',
            'prefix',
            'prepend',
            'suffix',
        ],
        emoji: [
            e._heavy_plus_sign /*➕*/,
            e._sewing_needle /*🪡*/,
        ],
    },
    {
        keyword: [
            'delete',
            'drop',
            'remove',
            'trash',
        ],
        emoji: [
            e._bomb /*💣*/,
            e._fire /*🔥*/,
            e._wastebasket /*🗑*/,
        ],
    },
    {
        keyword: [
            'archive',
            'seal',
        ],
        emoji: [
            e._file_cabinet /*🗄*/,
        ],
    },
    {
        keyword: [
            'cancel',
            'close',
            'disable',
        ],
        emoji: [
            e._heavy_multiplication_x /*✖*/,
            e._negative_squared_cross_mark /*❎*/,
            e._x /*❌*/,
        ],
    },
    {
        keyword: [
            'deprecate',
        ],
        emoji: [
            e._hand /*✋*/,
            e._stop_sign /*🛑*/,
        ],
    },
    {
        keyword: [
            'away',
            'exclude',
        ],
        emoji: [
            e._outbox_tray /*📤*/,
            e._scissors /*✂*/,
        ],
    },
    {
        keyword: [
            'arrange',
            'order',
            'rearrange',
            'reorder',
            'sort',
        ],
        emoji: [
            e._1234 /*🔢*/,
            e._signal_strength /*📶*/,
        ],
    },
    {
        keyword: [
            'array',
            'list',
            'queue',
            'stack',
        ],
        emoji: [
            e._scroll /*📜*/,
        ],
    },
    {
        keyword: [
            'beautiful',
            'beautify',
            'beauty',
            'cosmetics',
            'embellish',
            'format',
            'prettify',
            'pretty',
        ],
        emoji: [
            e._art /*🎨*/,
            e._lipstick /*💄*/,
            e._nail_care /*💅*/,
        ],
    },
    {
        keyword: [
            'enhance',
            'improve',
            'polish',
        ],
        emoji: [
            e._sparkles /*✨*/,
        ],
    },
    {
        keyword: [
            'update',
            'upgrade',
        ],
        emoji: [
            e._arrow_double_up /*⏫*/,
        ],
    },
    {
        keyword: [
            'degrade',
            'downgrade',
        ],
        emoji: [
            e._arrow_double_down /*⏬*/,
        ],
    },
    {
        keyword: [
            'refresh',
        ],
        emoji: [
            e._arrows_clockwise /*🔃*/,
            e._arrows_counterclockwise /*🔄*/,
        ],
    },
    {
        keyword: [
            'readability',
            'readable',
        ],
        emoji: [
            e._eyeglasses /*👓*/,
        ],
    },
    {
        keyword: [
            'register',
        ],
        emoji: [
            e._pencil /*📝*/,
        ],
    },
    {
        keyword: [
            'confirm',
            'conform',
            'validate',
            'verify',
        ],
        emoji: [
            e._ballot_box_with_check /*☑*/,
            e._heavy_check_mark /*✔*/,
            e._white_check_mark /*✅*/,
        ],
    },

    //
    {
        keyword: [
            'apply',
            'commit',
            'put',
            'set',
        ],
        emoji: [
            e._hammer /*🔨*/,
            e._pen /*🖊*/,
            e._syringe /*💉*/,
            e._wrench /*🔧*/,
        ],
    },

    {
        keyword: [
            'immature',
            'initial',
            'premature',
        ],
        emoji: [
            e._baby /*👶*/,
            e._baby_chick /*🐤*/,
        ],
    },
    {
        keyword: [
            'feature',
            'fresh',
            'new',
        ],
        emoji: [
            e._gift /*🎁*/,
            e._new /*🆕*/,
            e._seedling /*🌱*/,
        ],
    },
    {
        keyword: [
            'bump',
            'increase',
            'increment',
            'up',
        ],
        emoji: [
            e._arrow_up /*⬆️*/,
            e._heavy_plus_sign /*➕*/,
        ],
    },
    {
        keyword: [
            'decrease',
            'decrement',
            'down',
        ],
        emoji: [
            e._arrow_down /*⬇️*/,
            e._heavy_minus_sign /*➖*/,
        ],
    },
    {
        keyword: [
            'revision',
            'version',
        ],
        emoji: [
            e._label /*🏷*/,
        ],
    },
    {
        keyword: [
            'alternate',
            'alternative',
            'switch',
        ],
        emoji: [
            e._left_right_arrow /*↔️*/,
            e._performing_arts /*🎭*/,
        ],
    },
    {
        keyword: [
            'awake',
            'day',
            'daylight',
            'enable',
            'light',
            'on',
            'wake',
        ],
        emoji: [
            e._bulb /*💡*/,
            e._sun_with_face /*🌞*/,
        ],
    },
    {
        keyword: [
            'dark',
            'disable',
            'night',
            'off',
            'sleep',
        ],
        emoji: [
            e._crescent_moon /*🌙*/,
            e._zzz /*💤*/,
        ],
    },
    {
        keyword: [
            'lint',
            'style',
        ],
        emoji: [
            e._shirt /*👕*/,
            e._tshirt /*👕*/,
        ],
    },
    {
        keyword: [
            'clean',
        ],
        emoji: [
            e._shower /*🚿*/,
        ],
    },
    {
        keyword: [
            'recycle',
        ],
        emoji: [
            e._recycle /*♻*/,
        ],
    },
    {
        keyword: [
            'assess',
            'rethink',
            'retro',
            'retrospect',
        ],
        emoji: [
            e._detective /*🕵*/,
            e._mag /*🔍*/,
            e._mag_right /*🔎*/,
        ],
    },
    {
        keyword: [
            'fixture',
        ],
        emoji: [
            e._clamp /*🗜*/,
        ],
    },
    {
        keyword: [
            'test',
        ],
        emoji: [
            e._alembic /*⚗*/,
        ],
    },
    {
        keyword: [
            'browse',
            'check',
            'exam',
            'find',
            'lookup',
            'monitor',
            'query',
            'review',
            'search',
            'select',
            'supervise',
        ],
        emoji: [
            e._mag /*🔍*/,
            e._mag_right /*🔎*/,
            e._microscope /*🔬*/,
        ],
    },
    {
        keyword: [
            'align',
            'measure',
            'meter',
            'metre',
            'metric',
            'transform',
        ],
        emoji: [
            e._ruler /*📏*/,
            e._triangular_ruler /*📐*/,
        ],
    },
    {
        keyword: [
            'move',
            'send',
            'transport',
        ],
        emoji: [
            e._airplane /*✈*/,
            e._helicopter /*🚁*/,
            e._small_airplane /*🛩*/,
        ],
    },
    {
        keyword: [
            'deploy',
            'install',
            'launch',
            'publish',
            'setup',
        ],
        emoji: [
            e._rocket /*🚀*/,
        ],
    },
    {
        keyword: [
            'broadcast',
            'produce',
        ],
        emoji: [
            e._radio /*📻*/,
            e._satellite /*📡*/,
            e._tv /*📺*/,
        ],
    },
    {
        keyword: [
            'email',
            'mail',
        ],
        emoji: [
            e._envelope /*✉*/,
        ],
    },
    {
        keyword: [
            'ask',
            'inquiry',
            'query',
            'question',
            'request',
        ],
        emoji: [
            e._grey_question /*❔*/,
            e._question /*❓*/,
        ],
    },
    {
        keyword: [
            'fetch',
            'inbound',
            'receive',
            'take',
        ],
        emoji: [
            e._inbox_tray /*📥*/,
        ],
    },
    {
        keyword: [
            'callback',
            'consume',
            'listen',
            'subscribe',
        ],
        emoji: [
            e._ear /*👂*/,
        ],
    },
    {
        keyword: [
            'await',
            'standby',
        ],
        emoji: [
            e._hourglass_flowing_sand /*⏳*/,
            e._pause_button /*⏸*/,
        ],
    },
    {
        keyword: [
            'cron',
            'job',
            'time',
        ],
        emoji: [
            e._alarm_clock /*⏰*/,
            e._stopwatch /*⏱*/,
            e._timer /*⏲*/,
        ],
    },
    {
        keyword: [
            'calendar',
            'date',
            'period',
            'repeat',
            'repetitive',
            'schedule',
        ],
        emoji: [
            e._calendar /*📆*/,
            e._spiral_calendar /*🗓*/,
        ],
    },
    {
        keyword: [
            'reset',
            'revert',
            'rollback',
            'undo',
        ],
        emoji: [
            e._leftwards_arrow_with_hook /*↩️*/,
        ],
    },
    {
        keyword: [
            'redo',
        ],
        emoji: [
            e._arrow_right_hook /*↪️*/,
        ],
    },
    {
        keyword: [
            'book',
            'doc',
            'document',
            'guide',
            'manual',
            'readme',
            'reference',
        ],
        emoji: [
            e._blue_book /*📘*/,
            e._books /*📚*/,
            e._orange_book /*📙*/,
        ],
    },
    {
        keyword: [
            'comment',
            'draft',
            'note',
            'text',
        ],
        emoji: [
            e._pencil /*📝*/,
            e._writing_hand /*✍*/,
        ],
    },
    {
        keyword: [
            'log',
            'record',
        ],
        emoji: [
            e._scroll /*📜*/,
        ],
    },
    {
        keyword: [
            'beware',
            'caution',
            'lookout',
            'notice',
            'warn',
        ],
        emoji: [
            e._exclamation /*❗*/,
            e._grey_exclamation /*❕*/,
            e._heavy_exclamation_mark /*❗*/,
            e._warning /*⚠*/,
        ],
    },
    {
        keyword: [
            'avoid',
            'prevent',
            'safe',
        ],
        emoji: [
            e._hand /*✋*/,
        ],
    },
    {
        keyword: [
            'abort',
            'crash',
            'deadlock',
            'error',
            'exception',
            'hang',
            'kill',
            'stop',
        ],
        emoji: [
            e._skull /*💀*/,
            e._stop_sign /*🛑*/,
        ],
    },
    {
        keyword: [
            'danger',
            'hazard',
        ],
        emoji: [
            e._biohazard /*☣*/,
            e._skull_and_crossbones /*☠*/,
        ],
    },
    {
        keyword: [
            'human',
            'operator',
            'user',
        ],
        emoji: [
            e._man /*👨*/,
            e._woman /*👩*/,
        ],
    },
    {
        keyword: [
            'boy',
            'male',
            'man',
        ],
        emoji: [
            e._boy /*👦*/,
            e._man /*👨*/,
            e._older_man /*👴*/,
        ],
    },
    {
        keyword: [
            'female',
            'girl',
            'woman',
        ],
        emoji: [
            e._girl /*👧*/,
            e._older_woman /*👵*/,
            e._woman /*👩*/,
        ],
    },
    {
        keyword: [
            'canvas',
            'css',
            'frontend',
            'html',
            'image',
            'picture',
            'ui',
            'ux',
            'view',
        ],
        emoji: [
            e._framed_picture /*🖼*/,
        ],
    },
    {
        keyword: [
            'config',
            'option',
            'parameter',
            'setting',
            'setup',
        ],
        emoji: [
            e._gear /*⚙*/,
        ],
    },
    {
        keyword: [
            'emulate',
            'fake',
            'impersonate',
            'improvise',
            'mock',
            'simulate',
            'stub',
        ],
        emoji: [
            e._clown /*🤡*/,
            e._performing_arts /*🎭*/,
        ],
    },
    {
        keyword: [
            'inspect',
            'investigate',
            'spy',
        ],
        emoji: [
            e._detective /*🕵*/,
        ],
    },
    {
        keyword: [
            'field',
            'key',
            'property',
        ],
        emoji: [
            e._key /*🔑*/,
            e._old_key /*🗝*/,
        ],
    },
    {
        keyword: [
            'action',
            'execute',
            'play',
            'run',
            'start',
        ],
        emoji: [
            e._runner /*🏃*/,
        ],
    },
    {
        keyword: [
            'behavior',
            'function',
            'method',
        ],
        emoji: [
            e._man_cartwheeling /*🤸*/,
            e._woman_cartwheeling /*🤸*/,
        ],
    },
    {
        keyword: [
            'bound',
            'boundary',
            'ceiling',
            'constrain',
            'floor',
            'limit',
            'restrain',
            'restrict',
            'threshold',
        ],
        emoji: [
            e._hand /*✋*/,
            e._heavy_exclamation_mark /*❗*/,
        ],
    },
    {
        keyword: [
            'body',
            'content',
            'detail',
        ],
        emoji: [
            e._spiral_notepad /*🗒*/,
        ],
    },
    {
        keyword: [
            'info',
        ],
        emoji: [
            e._books /*📚*/,
        ],
    },
    {
        keyword: [
            'data',
        ],
        emoji: [
            e._computer /*💻*/,
        ],
    },
    {
        keyword: [
            'buffer',
            'memory',
            'persist',
            'save',
            'serialize',
            'store',
            'write',
        ],
        emoji: [
            e._floppy_disk /*💾*/,
        ],
    },
    {
        keyword: [
            'deserialize',
            'load',
            'read',
        ],
        emoji: [
            e._outbox_tray /*📤*/,
        ],
    },
    {
        keyword: [
            'acl',
            'antivirus',
            'conceal',
            'encode',
            'encrypt',
            'guard',
            'hash',
            'hide',
            'lock',
            'protect',
            'restrict',
            'scramble',
            'secret',
            'secure',
            'security',
            'shield',
            'sign',
        ],
        emoji: [
            e._closed_lock_with_key /*🔐*/,
            e._shield /*🛡*/,
        ],
    },
    {
        keyword: [
            'authenticate',
            'authorize',
        ],
        emoji: [
            e._policeman /*👮*/,
            e._policewoman /*👮‍♀*/,
        ],
    },
    {
        keyword: [
            'open',
        ],
        emoji: [
            e._open_file_folder /*📂*/,
        ],
    },
    {
        keyword: [
            'decode',
            'decrypt',
            'release',
            'reveal',
            'uncover',
            'unleash',
            'unscramble',
            'unveil',
        ],
        emoji: [
            e._unlock /*🔓*/,
        ],
    },
    {
        keyword: [
            'access',
        ],
        emoji: [
            e._key /*🔑*/,
        ],
    },
    {
        keyword: [
            'address',
            'identifier',
            'location',
            'path',
            'route',
            'uri',
            'url',
        ],
        emoji: [
            e._earth_africa /*🌍*/,
            e._world_map /*🗺*/,
        ],
    },
    {
        keyword: [
            'demonstrate',
            'draw',
            'illustrate',
            'paint',
        ],
        emoji: [
            e._art /*🎨*/,
            e._framed_picture /*🖼*/,
        ],
    },
    {
        keyword: [
            'display',
            'show',
            'visibility',
            'visible',
        ],
        emoji: [
            e._film_projector /*📽*/,
            e._tv /*📺*/,
        ],
    },
    {
        keyword: [
            'print',
        ],
        emoji: [
            e._printer /*🖨*/,
        ],
    },
    {
        keyword: [
            'ignore',
            'jump',
            'skip',
            'unfollow',
        ],
        emoji: [
            e._scissors /*✂*/,
        ],
    },
    {
        keyword: [
            'forget',
            'neglect',
            'overlook',
        ],
        emoji: [
            e._wastebasket /*🗑*/,
        ],
    },
    {
        keyword: [
            'reattempt',
            'reboot',
            'reconnect',
            'reconstruct',
            'repeat',
            'rerun',
            'restart',
            'retry',
        ],
        emoji: [
            e._arrows_clockwise /*🔃*/,
            e._arrows_counterclockwise /*🔄*/,
        ],
    },
    {
        keyword: [
            'attempt',
            'begin',
            'boot',
            'init',
            'initialize',
            'launch',
            'run',
            'start',
            'try',
        ],
        emoji: [
            e._play_or_pause_button /*⏯*/,
        ],
    },
    {
        keyword: [
            'hold',
            'holdup',
            'interrupt',
            'pause',
            'suspend',
            'wait',
        ],
        emoji: [
            e._pause_button /*⏸*/,
        ],
    },
    {
        keyword: [
            'abort',
            'end',
            'kill',
            'stop',
        ],
        emoji: [
            e._hand /*✋*/,
            e._stop_button /*⏹*/,
        ],
    },
    {
        keyword: [
            'destroy',
            'destruct',
            'dispose',
        ],
        emoji: [
            e._bomb /*💣*/,
        ],
    },
    {
        keyword: [
            'silence',
            'silent',
            'suppress',
        ],
        emoji: [
            e._headphone /*🎧*/,
        ],
    },
    {
        keyword: [
            'direct',
            'guide',
            'instruct',
            'landmark',
            'navigate',
            'redirect',
        ],
        emoji: [
            e._triangular_flag_on_post /*🚩*/,
        ],
    },
    {
        keyword: [
            'base',
            'home',
            'origin',
            'root',
        ],
        emoji: [
            e._house /*🏠*/,
        ],
    },
    {
        keyword: [
            'brain',
            'center',
            'core',
        ],
        emoji: [
            e._brain /*🧠*/,
        ],
    },
    {
        keyword: [
            'heart',
            'middle',
        ],
        emoji: [
            e._heart /*❤*/,
        ],
    },
    {
        keyword: [
            'breach',
            'compromise',
            'hack',
            'hole',
            'penetrate',
            'trespass',
            'vulnerability',
        ],
        emoji: [
            e._biohazard /*☣*/,
            e._skull_and_crossbones /*☠*/,
        ],
    },
    {
        keyword: [
            'addin',
            'component',
            'module',
            'plugin',
        ],
        emoji: [
            e._jigsaw /*🧩*/,
        ],
    },
    {
        keyword: [
            'disc',
            'image',
        ],
        emoji: [
            e._cd /*💿*/,
        ],
    },
    {
        keyword: [
            'dealer',
            'intermediate',
            'middleman',
            'middleware',
        ],
        emoji: [
            e._man_juggling /*🤹*/,
            e._woman_juggling /*🤹*/,
        ],
    },
    {
        keyword: [
            'graph',
            'net',
            'network',
            'radial',
        ],
        emoji: [
            e._spider_web /*🕸*/,
        ],
    },
    {
        keyword: [
            'tree',
        ],
        emoji: [
            e._tree /*🌳*/,
        ],
    },
    {
        keyword: [
            'edge',
            'leaf',
        ],
        emoji: [
            e._leaf /*🍃*/,
        ],
    },
    {
        keyword: [
            'construct',
            'structure',
        ],
        emoji: [
            e._building_construction /*🏗*/,
        ],
    },
    {
        keyword: [
            'area',
            'range',
        ],
        emoji: [
            e._world_map /*🗺*/,
        ],
    },
    {
        keyword: [
            'cover',
            'shadow',
            'support',
        ],
        emoji: [
            e._umbrella /*☔*/,
        ],
    },
    {
        keyword: [
            'enumerate',
            'for',
            'iterate',
            'loop',
            'loopback',
            'repeat',
            'repetitive',
            'while',
        ],
        emoji: [
            e._repeat /*🔁*/,
        ],
    },
    {
        keyword: [
            'block',
            'hinder',
            'pend',
            'wip',
        ],
        emoji: [
            e._construction /*🚧*/,
            e._hourglass_flowing_sand /*⏳*/,
        ],
    },
    {
        keyword: [
            'replace',
            'substitute',
        ],
        emoji: [
            e._repeat /*🔁*/,
        ],
    },
    {
        keyword: [
            'internet',
            'wan',
            'web',
            'www',
        ],
        emoji: [
            e._globe_with_meridians /*🌐*/,
        ],
    },
    {
        keyword: [
            'ethernet',
            'lan',
        ],
        emoji: [
            e._electric_plug /*🔌*/,
        ],
    },
    {
        keyword: [
            'wifi',
            'wireless',
            'wlan',
        ],
        emoji: [
            e._satellite /*📡*/,
        ],
    },
    {
        keyword: [
            'ping',
            'pong',
        ],
        emoji: [
            e._ping_pong /*🏓*/,
        ],
    },
    {
        keyword: [
            'dig',
        ],
        emoji: [
            e._detective /*🕵*/,
        ],
    },
    {
        keyword: [
            'host',
            'serve',
        ],
        emoji: [
            e._computer /*💻*/,
        ],
    },
    {
        keyword: [
            'application',
            'client',
            'program',
        ],
        emoji: [
            e._iphone /*📱*/,
        ],
    },
    {
        keyword: [
            'bash',
            'cmd',
            'dos',
            'fish',
            'powershell',
            'pwsh',
            'terminal',
            'zsh',
        ],
        emoji: [
            e._desktop_computer /*🖥*/,
        ],
    },
    {
        keyword: [
            'fish',
        ],
        emoji: [
            e._fish /*🐟*/,
        ],
    },
    {
        keyword: [
            'key',
            'keyboard',
        ],
        emoji: [
            e._keyboard /*⌨️*/,
        ],
    },
    {
        keyword: [
            'click',
            'cursor',
            'mouse',
        ],
        emoji: [
            e._computer_mouse /*🖱️*/,
        ],
    },
    {
        keyword: [
            'display',
            'monitor',
            'screen'
        ],
        emoji: [
            e._desktop_computer /*🖥*/,
        ],
    },
    {
        keyword: [
            'android',
            'ios',
            'mobile',
            'smartphone',
            'winphone',
        ],
        emoji: [
            e._iphone /*📱*/,
        ],
    },
    {
        keyword: [
            'window',
        ],
        emoji: [
            e._window /*🪟*/,
        ],
    },
    {
        keyword: [
            'thread',
        ],
        emoji: [
            e._thread /*🧵*/,
            e._yarn /*🧶*/,
        ],
    },
    {
        keyword: [
            'process',
        ],
        emoji: [
            e._factory /*🏭*/,
            e._gear /*⚙️*/,
        ],
    },
];
