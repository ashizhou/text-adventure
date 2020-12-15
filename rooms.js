var rooms = {
    "jail": {
        "description": "You find yourself in a jail cell. You have no idea how you got here. Directly ahead of you to the north is the jail door. You hear the sound of metal drop and out of the corner of your eye you see a rat scurry into the shadows. You notice a paper clip lying there. Also around the floor are some dead bugs as well as your lunch tray from the day's meal.</br></br> ༼ つ ಥ_ಥ ༽つ",
        "directions": {
            "north": "hallway",
        }
    },
    "hallway": {
        "description": "You have entered a hallway. To the west and to the east the dark hallway continues. To the south is the jail room from where you came. The only source of light is a torch hanging on the wall. Beneath the torch lies a mysterious note. Perhaps it was left by your captors.",
        "directions": {
            "south": "jail",
            "east": "torture",
            "west": "westhall",
        }
    },
    "torture": {
        "description": "You have entered a room that seems to be a place of great anguish. Strange and grotesque looking devices hang from the walls and ceiling. There's a whip hanging on the wall. After a quick observation, you notice that the room appears fairly large, and a table sits in the corner. To the south there is a doorway. To the west is the hallway that you came from.",
        "directions": {
            "west": "hallway",
            "south": "morgue",
        }
    },
    "morgue": {
        "description": "As you advance south, you begin to hear gurgling noises. When you enter the room, you see a zombie feasting on the dead bodies of the morgue!",
        "directions": {
            "north": "torch",
            "south": "morgue",
        }
    },

    "westhall": {
        "description": "As you move west, you come upon another junction. To the north and south are some dark rooms. You came from the east.",
        "directions": {
            "east": "hallway",
            "north": "exit",
            "south":"bonus",
        }
    },
    "exit": {
        "description": "You enter a room with a strange and decorated door. The door appears to lead somewhere, but it also looks locked. Upon closer inspection, you discover that the lock cannot be picked and that a key is required to open it. To the south is the way you came from.",
        "directions": {
            "south": "westhall",
        }
    },
    "bonus": {
        "description": "You enter what appears to be a storage room. It is empty except for a crate in the corner. It looks like it hasn't been touched in years.",
        "directions": {
            "north": "westhall",
        }
    }
}
