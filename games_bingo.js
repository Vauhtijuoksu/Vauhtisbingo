let seed = 2466342
let bid = "games"

let bg_colors = {
    0.0: [113,41,71],
    6.0: [113,41,71],
    9.0: [223,94,148],
    19.0: [223,94,148],
    23.0: [113,41,71],
    24.0: [113,41,71]
}
let mid = ["BONUSOHJELMA", "Su 5.5. noin klo: 18:00 ->"]

let choises  = [
    ["Super Meat Boy<br>Any%", "Ke 1.5.<Br>Klo: 13:00"],
["Shovel Knight Specter of Torment<br>Any%", "Ke 1.5.<Br>Klo: 13:45"],
["Terra Nil<br>Any% standard", "Ke 1.5.<Br>Klo: 14:55"],
["Old School RuneScape<br>Dragon Slayer 1", "Ke 1.5.<Br>Klo: 15:50"],
["Arzette: The Jewel of Faramore<br>Cutscene% casual sceneskip off", "Ke 1.5.<Br>Klo: 16:20"],
["Tiny Rogues<br>Normal Run Glitchless", "Ke 1.5.<Br>Klo: 18:00"],
["Cooking Simulator<br>Career Mode - Any%", "Ke 1.5.<Br>Klo: 18:35"],
["Pode<br>100% Co-op", "Ke 1.5.<Br>Klo: 20:25"],
["Spacegulls<br>Any%", "Ke 1.5.<Br>Klo: 21:35"],
["Futurama<br>Any%", "Ke 1.5.<Br>Klo: 22:00"],
["Burnout 3: Takedown<br>Race Tour Any%", "Ke 1.5.<Br>Klo: 23:10"],
["Golden Sun 2: The Lost Age<br>Any% no S&Q+", "To 2.5.<Br>Klo: 1:55"],
["Penny's Big Breakaway<br>Any% Restricted", "To 2.5.<Br>Klo: 7:20"],
["Styx: Shards of Darkness<br>Any%", "To 2.5.<Br>Klo: 10:00"],
["Sanabi<br>Marathon Full Game", "To 2.5.<Br>Klo: 10:55"],
["Super mario world<br>Any%", "To 2.5.<Br>Klo: 13:10"],
["Bubble Bobble<br>Any% TAS", "To 2.5.<Br>Klo: 13:35"],
["Pitfall Planet<br>Any% Two Controllers", "To 2.5.<Br>Klo: 14:20"],
["Dark Souls III<br>Any% Glitchless", "To 2.5.<Br>Klo: 15:15"],
["The Messenger<br>8-Bit No OoB - Arcade stick", "To 2.5.<Br>Klo: 17:05"],
["Skull Island - Rise of Kong<br>Any%", "To 2.5.<Br>Klo: 17:55"],
["Jak and Daxter: The Precursor Legacy<br>No Major Skips", "To 2.5.<Br>Klo: 18:25"],
["Control<br>Any%", "To 2.5.<Br>Klo: 20:25"],
["Final Fantasy X/X-2 HD Remaster<br>Any%", "To 2.5.<Br>Klo: 21:50"],
["The Legend of Zelda: The Minish Cap<br>Any%", "Pe 3.5.<Br>Klo: 8:00"],
["Sly Cooper and The Thievius Raccoonus<br>Any%", "Pe 3.5.<Br>Klo: 10:40"],
["Peggle Deluxe<br>Adventure Mode race", "Pe 3.5.<Br>Klo: 11:40"],
["Squirrel Stapler<br>All Geocaches", "La 4.5.<Br>Klo: 1:45"],
["Halo: CE MCC<br>Legendary Coop Any%", "Pe 3.5.<Br>Klo: 13:25"],
["Prince of Persia Lost Crown<br>All bosses% restricted", "Pe 3.5.<Br>Klo: 15:35"],
["Bloodstained Ritual of the Night<br>Any% Zangetsu", "Pe 3.5.<Br>Klo: 18:15"],
["Devil May Cry<br>Any% (Normal)", "Pe 3.5.<Br>Klo: 19:00"],
["Baldur's Gate 3<br>All Acts", "Pe 3.5.<Br>Klo: 20:05"],
["GO! GO! Hamster Chef!<br>100%", "Pe 3.5.<Br>Klo: 20:55"],
["Poppy Playtime<br>Trilogy any%", "Pe 3.5.<Br>Klo: 21:30"],
["Pokémon Emerald<br>Any% Glitchless", "Pe 3.5.<Br>Klo: 22:25"],
["Destiny 2<br>Dungeon Crawl Fireteam Glitchless", "La 4.5.<Br>Klo: 2:15"],
["The Legend of Zelda: The Wind Waker HD<br>Any% Restricted", "La 4.5.<Br>Klo: 7:25"],
["Muumit ja Taikurin hattu<br>Beat the game", "La 4.5.<Br>Klo: 9:55"],
["Nuuskamuikkunen: Muumilaakson Melodia<br>Any% race", "La 4.5.<Br>Klo: 10:30"],
["Barbie Super Sports<br>Skates Any% + Snowboard Any%", "La 4.5.<Br>Klo: 12:00"],
["Horse Riding Deluxe<br>All pets", "La 4.5.<Br>Klo: 12:40"],
["Starshine Legacy 3<br>Any%", "La 4.5.<Br>Klo: 13:15"],
["Donkey Kong Country<br>101%", "La 4.5.<Br>Klo: 14:00"],
["Gravity Circuit<br>Any% Normal", "La 4.5.<Br>Klo: 15:40"],
["Mighty No. 9<br>Any%", "La 4.5.<Br>Klo: 16:45"],
["Titanfall 2<br>Any% Standard", "La 4.5.<Br>Klo: 17:45"],
["Neon White<br>White's heaven rush", "La 4.5.<Br>Klo: 19:20"],
["Tenchu 2: Birth of the Stealth Assassins<br>Any% (Rikimaru)", "La 4.5.<Br>Klo: 20:30"],
["Return to Castle Wolfenstein<br>Any%", "La 4.5.<Br>Klo: 21:15"],
["Resident Evil 2 (2019)<br>LAS 120FPS", "La 4.5.<Br>Klo: 22:25"],
["Final Fantasy XIV<br>Heaven-on-High floors 1-50", "La 4.5.<Br>Klo: 23:40"],
["Final Fantasy 4 Pixel Remaster<br>Any%", "Su 5.5.<Br>Klo: 1:20"],
["Octopath Traveler<br>Galdera", "Su 5.5.<Br>Klo: 5:40"],
["Spyro The Dragon<br>120%", "Su 5.5.<Br>Klo: 9:40"],
["Spyro Reignited Trilogy<br>Spyro Year of the Dragon Any%", "Su 5.5.<Br>Klo: 11:40"],
["The Legend of the spyro: Dawn of the Dragon<br>Any%", "Su 5.5.<Br>Klo: 13:45"],
["Command & Conquer: Generals - Zero Hour<br>GLA Campaign", "Su 5.5.<Br>Klo: 15:30"],
["Horizons of Spirit Island<br>Any% Eskalaatiolla", "Su 5.5.<Br>Klo: 16:15"],
["Type King<br>Singleplayer Easy Race", "Su 5.5.<Br>Klo: 16:55"],
["Jump King<br>Main Babe", "Su 5.5.<Br>Klo: 17:35"],
]

