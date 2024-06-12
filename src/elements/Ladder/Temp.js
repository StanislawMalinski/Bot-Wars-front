import { useState } from "react"
import Ladder from "./Ladder";

export default function Temp(){
    const games1 = [{  "data": [    {      "botId": [        8,        5      ],      "status": "Playing",      "winner": -1,      "position": 4,      "playedOutDate": "0001-01-01T00:00:00"    },    {      "botId": [        7,        1      ],      "status": "Playing",      "winner": -1,      "position": 3,      "playedOutDate": "0001-01-01T00:00:00"    },    {      "botId": [        9,        2      ],      "status": "Playing",      "winner": -1,      "position": 5,      "playedOutDate": "0001-01-01T00:00:00"    },    {      "botId": [        6      ],      "status": "NotReadyToPlay",      "winner": -1,      "position": 2,      "playedOutDate": "0001-01-01T00:00:00"    }  ]},
    {  "data": [    {      "botId": [        8,        5      ],      "status": "Played",      "winner": 5,      "position": 4,      "playedOutDate": "2024-05-23T14:30:16.757158"    },    {      "botId": [        7,        1      ],      "status": "Playing",      "winner": -1,      "position": 3,      "playedOutDate": "0001-01-01T00:00:00"    },    {      "botId": [        9,        2      ],      "status": "Played",      "winner": 2,      "position": 5,      "playedOutDate": "2024-05-23T14:30:16.538882"    },    {      "botId": [        6      ],      "status": "NotReadyToPlay",      "winner": -1,      "position": 2,      "playedOutDate": "0001-01-01T00:00:00"    }  ]},
    {  "data": [    {      "botId": [        8,        5      ],      "status": "Played",      "winner": 5,      "position": 4,      "playedOutDate": "2024-05-23T14:30:16.757158"    },    {      "botId": [        7,        1      ],      "status": "Played",      "winner": 7,      "position": 3,      "playedOutDate": "2024-05-23T14:30:17.4027264"    },    {      "botId": [        9,        2      ],      "status": "Played",      "winner": 2,      "position": 5,      "playedOutDate": "2024-05-23T14:30:16.538882"    },    {      "botId": [        6      ],      "status": "NotReadyToPlay",      "winner": -1,      "position": 2,      "playedOutDate": "0001-01-01T00:00:00"    }  ]},
    {  "data": [    {      "botId": [        8,        5      ],      "status": "Resolve",      "winner": 5,      "position": 4,      "playedOutDate": "2024-05-23T14:30:16.757158"    },    {      "botId": [        7,        1      ],      "status": "Resolve",      "winner": 7,      "position": 3,      "playedOutDate": "2024-05-23T14:30:17.4027264"    },    {      "botId": [        9,        2      ],      "status": "Resolve",      "winner": 2,      "position": 5,      "playedOutDate": "2024-05-23T14:30:16.538882"    },    {      "botId": [        6,        2      ],      "status": "Playing",      "winner": -1,      "position": 2,      "playedOutDate": "0001-01-01T00:00:00"    },    {      "botId": [        5,        7      ],      "status": "Playing",      "winner": -1,      "position": 1,      "playedOutDate": "0001-01-01T00:00:00"    }  ]},
    {  "data": [    {      "botId": [        8,        5      ],      "status": "Resolve",      "winner": 5,      "position": 4,      "playedOutDate": "2024-05-23T14:30:16.757158"    },    {      "botId": [        7,        1      ],      "status": "Resolve",      "winner": 7,      "position": 3,      "playedOutDate": "2024-05-23T14:30:17.4027264"    },    {      "botId": [        9,        2      ],      "status": "Resolve",      "winner": 2,      "position": 5,      "playedOutDate": "2024-05-23T14:30:16.538882"    },    {      "botId": [        6,        2      ],      "status": "Resolve",      "winner": 2,      "position": 2,      "playedOutDate": "2024-05-23T14:30:46.5770369"    },    {      "botId": [        5,        7      ],      "status": "Resolve",      "winner": 7,      "position": 1,      "playedOutDate": "2024-05-23T14:30:44.3453841"    },    {      "botId": [        2,        7      ],      "status": "Playing",      "winner": -1,      "position": 0,      "playedOutDate": "0001-01-01T00:00:00"    }  ]},
    {  "data": [    {      "botId": [        8,        5      ],      "status": "Resolve",      "winner": 5,      "position": 4,      "playedOutDate": "2024-05-23T14:30:16.757158"    },    {      "botId": [        7,        1      ],      "status": "Resolve",      "winner": 7,      "position": 3,      "playedOutDate": "2024-05-23T14:30:17.4027264"    },    {      "botId": [        9,        2      ],      "status": "Resolve",      "winner": 2,      "position": 5,      "playedOutDate": "2024-05-23T14:30:16.538882"    },    {      "botId": [        6,        2      ],      "status": "Resolve",      "winner": 2,      "position": 2,      "playedOutDate": "2024-05-23T14:30:46.5770369"    },    {      "botId": [        5,        7      ],      "status": "Resolve",      "winner": 7,      "position": 1,      "playedOutDate": "2024-05-23T14:30:44.3453841"    },    {      "botId": [        2,        7      ],      "status": "Played",      "winner": 7,      "position": 0,      "playedOutDate": "2024-05-23T14:31:05.9817403"    }  ]}];

    const games2 = [
    [{"matchId":1,"PlayersBots":[{"BotId":8,"BotFile":"amongus_bot_2","UserName":"emma_jenkins"},{"BotId":5,"BotFile":"fifa22_bot_1","UserName":"sam_wilson"}],"Status":"Playing","Winner":-1,"Position":4,"PlayedOutDate":"0001-01-01T00:00:00","MatchResult":"NotPlayed"},{"matchId":2,"PlayersBots":[{"BotId":7,"BotFile":"amongus_bot_1","UserName":"david_miller"},{"BotId":1,"BotFile":"quake3_bot_1","UserName":"john_doe"}],"Status":"Playing","Winner":-1,"Position":3,"PlayedOutDate":"0001-01-01T00:00:00","MatchResult":"NotPlayed"},{"matchId":3,"PlayersBots":[{"BotId":9,"BotFile":"minecra","UserName":"ryan_clark"},{"BotId":2,"BotFile":"quake3_bot_2","UserName":"jane_smith"}],"Status":"Playing","Winner":-1,"Position":5,"PlayedOutDate":"0001-01-01T00:00:00","MatchResult":"NotPlayed"},{"matchId":4,"PlayersBots":[{"BotId":6,"BotFile":"fifa22_bot_2","UserName":"olivia_brown"}],"Status":"NotReadyToPlay","Winner":-1,"Position":2,"PlayedOutDate":"0001-01-01T00:00:00","MatchResult":"NotPlayed"}],
    [{"matchId":1,"PlayersBots":[{"BotId":8,"BotFile":"amongus_bot_2","UserName":"emma_jenkins"},{"BotId":5,"BotFile":"fifa22_bot_1","UserName":"sam_wilson"}],"Status":"Resolve","Winner":5,"Position":4,"PlayedOutDate":"2024-05-29T14:54:46.2801257","MatchResult":"BotFiled"},{"matchId":2,"PlayersBots":[{"BotId":7,"BotFile":"amongus_bot_1","UserName":"david_miller"},{"BotId":1,"BotFile":"quake3_bot_1","UserName":"john_doe"}],"Status":"Resolve","Winner":7,"Position":3,"PlayedOutDate":"2024-05-29T14:54:45.7084368","MatchResult":"Won"},{"matchId":3,"PlayersBots":[{"BotId":9,"BotFile":"minecra","UserName":"ryan_clark"},{"BotId":2,"BotFile":"quake3_bot_2","UserName":"jane_smith"}],"Status":"Resolve","Winner":2,"Position":5,"PlayedOutDate":"2024-05-29T14:54:44.0480468","MatchResult":"Won"},{"matchId":4,"PlayersBots":[{"BotId":2,"BotFile":"quake3_bot_2","UserName":"jane_smith"},{"BotId":6,"BotFile":"fifa22_bot_2","UserName":"olivia_brown"}],"Status":"Playing","Winner":-1,"Position":2,"PlayedOutDate":"0001-01-01T00:00:00","MatchResult":"NotPlayed"},{"matchId":5,"PlayersBots":[{"BotId":5,"BotFile":"fifa22_bot_1","UserName":"sam_wilson"},{"BotId":7,"BotFile":"amongus_bot_1","UserName":"david_miller"}],"Status":"Playing","Winner":-1,"Position":1,"PlayedOutDate":"0001-01-01T00:00:00","MatchResult":"NotPlayed"}],
    [{"matchId":1,"PlayersBots":[{"BotId":8,"BotFile":"amongus_bot_2","UserName":"emma_jenkins"},{"BotId":5,"BotFile":"fifa22_bot_1","UserName":"sam_wilson"}],"Status":"Resolve","Winner":5,"Position":4,"PlayedOutDate":"2024-05-29T14:54:46.2801257","MatchResult":"BotFiled"},{"matchId":2,"PlayersBots":[{"BotId":7,"BotFile":"amongus_bot_1","UserName":"david_miller"},{"BotId":1,"BotFile":"quake3_bot_1","UserName":"john_doe"}],"Status":"Resolve","Winner":7,"Position":3,"PlayedOutDate":"2024-05-29T14:54:45.7084368","MatchResult":"Won"},{"matchId":3,"PlayersBots":[{"BotId":9,"BotFile":"minecra","UserName":"ryan_clark"},{"BotId":2,"BotFile":"quake3_bot_2","UserName":"jane_smith"}],"Status":"Resolve","Winner":2,"Position":5,"PlayedOutDate":"2024-05-29T14:54:44.0480468","MatchResult":"Won"},{"matchId":4,"PlayersBots":[{"BotId":6,"BotFile":"fifa22_bot_2","UserName":"olivia_brown"},{"BotId":2,"BotFile":"quake3_bot_2","UserName":"jane_smith"}],"Status":"Resolve","Winner":2,"Position":2,"PlayedOutDate":"2024-05-29T14:54:53.3744008","MatchResult":"Won"},{"matchId":5,"PlayersBots":[{"BotId":5,"BotFile":"fifa22_bot_1","UserName":"sam_wilson"},{"BotId":7,"BotFile":"amongus_bot_1","UserName":"david_miller"}],"Status":"Resolve","Winner":7,"Position":1,"PlayedOutDate":"2024-05-29T14:54:54.6489749","MatchResult":"BotFiled"},{"matchId":6,"PlayersBots":[{"BotId":2,"BotFile":"quake3_bot_2","UserName":"jane_smith"},{"BotId":7,"BotFile":"amongus_bot_1","UserName":"david_miller"}],"Status":"Playing","Winner":-1,"Position":0,"PlayedOutDate":"0001-01-01T00:00:00","MatchResult":"NotPlayed"}],
    [{"matchId":1,"PlayersBots":[{"BotId":8,"BotFile":"amongus_bot_2","UserName":"emma_jenkins"},{"BotId":5,"BotFile":"fifa22_bot_1","UserName":"sam_wilson"}],"Status":"Resolve","Winner":5,"Position":4,"PlayedOutDate":"2024-05-29T14:54:46.2801257","MatchResult":"BotFiled"},{"matchId":2,"PlayersBots":[{"BotId":7,"BotFile":"amongus_bot_1","UserName":"david_miller"},{"BotId":1,"BotFile":"quake3_bot_1","UserName":"john_doe"}],"Status":"Resolve","Winner":7,"Position":3,"PlayedOutDate":"2024-05-29T14:54:45.7084368","MatchResult":"Won"},{"matchId":3,"PlayersBots":[{"BotId":9,"BotFile":"minecra","UserName":"ryan_clark"},{"BotId":2,"BotFile":"quake3_bot_2","UserName":"jane_smith"}],"Status":"Resolve","Winner":2,"Position":5,"PlayedOutDate":"2024-05-29T14:54:44.0480468","MatchResult":"Won"},{"matchId":4,"PlayersBots":[{"BotId":6,"BotFile":"fifa22_bot_2","UserName":"olivia_brown"},{"BotId":2,"BotFile":"quake3_bot_2","UserName":"jane_smith"}],"Status":"Resolve","Winner":2,"Position":2,"PlayedOutDate":"2024-05-29T14:54:53.3744008","MatchResult":"Won"},{"matchId":5,"PlayersBots":[{"BotId":5,"BotFile":"fifa22_bot_1","UserName":"sam_wilson"},{"BotId":7,"BotFile":"amongus_bot_1","UserName":"david_miller"}],"Status":"Resolve","Winner":7,"Position":1,"PlayedOutDate":"2024-05-29T14:54:54.6489749","MatchResult":"BotFiled"},{"matchId":6,"PlayersBots":[{"BotId":2,"BotFile":"quake3_bot_2","UserName":"jane_smith"},{"BotId":7,"BotFile":"amongus_bot_1","UserName":"david_miller"}],"Status":"Resolve","Winner":7,"Position":0,"PlayedOutDate":"2024-05-29T14:55:04.4659877","MatchResult":"Won"}]]

    const mokcup = [[
        {"matchId":1,"PlayersBots":[{"BotId":8,"BotFile":"Back_jackbot_8","UserName":"emma_jenkins"},{"BotId":5,"BotFile":"Back_jackbot_5","UserName":"sam_wilson"}],"Status":"Resolve","Winner":5,"Position":4,"PlayedOutDate":"2024-06-10T09:32:46.4116135","MatchResult":"Won"},
        {"matchId":2,"PlayersBots":[{"BotId":7,"BotFile":"Back_jackbot_7","UserName":"david_miller"},{"BotId":1,"BotFile":"Back_jackbot_1","UserName":"john_doe"}],"Status":"Resolve","Winner":7,"Position":3,"PlayedOutDate":"2024-06-10T09:32:47.7387294","MatchResult":"Won"},
        {"matchId":3,"PlayersBots":[{"BotId":9,"BotFile":"Back_jackbot_9","UserName":"ryan_clark"},{"BotId":2,"BotFile":"Back_jackbot_2","UserName":"jane_smith"}],"Status":"Resolve","Winner":2,"Position":5,"PlayedOutDate":"2024-06-10T09:32:47.5846803","MatchResult":"Won"},
        {"matchId":4,"PlayersBots":[{"BotId":6,"BotFile":"Back_jackbot_6","UserName":"olivia_brown"},{"BotId":2,"BotFile":"Back_jackbot_2","UserName":"jane_smith"}],"Status":"Resolve","Winner":2,"Position":2,"PlayedOutDate":"2024-06-10T09:32:56.4706626","MatchResult":"Won"},
        {"matchId":5,"PlayersBots":[{"BotId":5,"BotFile":"Back_jackbot_5","UserName":"sam_wilson"},{"BotId":7,"BotFile":"Back_jackbot_7","UserName":"david_miller"}],"Status":"Resolve","Winner":7,"Position":1,"PlayedOutDate":"2024-06-10T09:32:55.2517037","MatchResult":"Won"},
        {"matchId":6,"PlayersBots":[{"BotId":2,"BotFile":"Back_jackbot_2","UserName":"jane_smith"},{"BotId":7,"BotFile":"Back_jackbot_7","UserName":"david_miller"}],"Status":"Resolve","Winner":7,"Position":0,"PlayedOutDate":"2024-06-10T09:33:05.4557752","MatchResult":"Won"}
    ]]

    const games = games2;

    const [index, setIndex] = useState(0);
    const [status, setStatus] = useState(games[index]);

    return (<>
        <Ladder status={status}/>
        <button onClick={() => {
            setIndex((index - 1 + games.length) % games.length);
            setStatus(games[index]);
        }}>Prev</button>
        <h1>{index}/{games.length}</h1>
        <button onClick={() => {
            setIndex((index + 1) % games.length);
            setStatus(games[index]);
        }}>Next</button>
    </>)
}