let seed = 1345434679
let bid = "games"

let bg_colors = {
    0.0: [81,151,191],
    12.0: [111,196,223],
    24.0: [81,151,191],
}
let mid = ["VAPAA VALINTA", "Kato mitä vaa."]

let choises  = [
  ["Nuuskamuikkunen: Muumilaakson Melodia<br>Any%", "Ke 11.11.<Br>Klo: 14:20"],
  ["Octopath Traveler II<br>Castti Single Story", "Ke 11.11.<Br>Klo: 15:40"],
  ["Dome Keeper<br>Relic Hunt Any%, small map, no modifiers/gadgets", "Ke 11.11.<Br>Klo: 16:30"],
  ["WarioWare: Get It Together!<br>Any% NG+ 2P", "Ke 11.11.<Br>Klo: 17:00"],
  ["The Simpsons Game<br>Any%", "Ke 11.11.<Br>Klo: 18:10"],
  ["Sly 3: Konnien kunnia<br>Ep2 tai Ep3", "Ke 11.11.<Br>Klo: 20:00"],
  ["Muumipeikko: Talven Taika<br>Any%", "Ke 11.11.<Br>Klo: 21:20"],
  ["Miitopia<br>Dark Lord", "Ke 11.11.<Br>Klo: 23:30"],
  ["Spyro Reignited Trilogy<br>Spyro 2 Ripto's Rage 64 Orbs NLS", "To 12.11.<Br>Klo: 7:10"],
  ["OpenPete: Spyro the Dragon<br>1,2", "To 12.11.<Br>Klo: 9:55"],
  ["StarCraft II: Wings of Liberty<br>Normal Any%", "To 12.11.<Br>Klo: 11:55"],
  ["Octopath Traveler<br>Rogues", "To 12.11.<Br>Klo: 14:35"],
  ["Peggle Nights<br>Any% Race", "To 12.11.<Br>Klo: 16:50"],
  ["Resident Evil Revelations<br>Any%", "To 12.11.<Br>Klo: 18:30"],
  ["Forbidden Solitaire<br>Good ending", "To 12.11.<Br>Klo: 21:00"],
  ["Pokémon Stadium<br>Rent Free Glitchless", "To 12.11.<Br>Klo: 23:10"],
  ["Spore<br>Ally The Grox%", "Pe 13.11.<Br>Klo: 9:20"],
  ["Bentley's Hackpack<br>All Stages", "Pe 13.11.<Br>Klo: 11:10"],
  ["Pizza Tower<br>Any% Peppino NMG", "Pe 13.11.<Br>Klo: 13:20"],
  ["The Binding of Isaac: Repentance<br>R+7 (S4)", "Pe 13.11.<Br>Klo: 14:50"],
  ["Neon White<br>White's Heaven Rush + Violet's Heaven Rush", "Pe 13.11.<Br>Klo: 17:00"],
  ["YLLÄRIPELI<br>Keksi peli itte", "Pe 13.11.<Br>Klo: 18:20"],
  ["Deep Rock Galactic<br>Deep Dive", "Pe 13.11.<Br>Klo: 19:50"],
  ["Claw<br>Any% No Double Jump", "Pe 13.11.<Br>Klo: 20:40"],
  ["Paint Archipelago<br>Race", "Pe 13.11.<Br>Klo: 21:50"],
  ["A Way Out<br>Any%", "Pe 13.11.<Br>Klo: 23:15"],
  ["The House of the Dead: Overkill<br>Any%", "La 14.11.<Br>Klo: 2:55"],
  ["Voice of Cards: The Beasts of Burden<br>Any%", "La 14.11.<Br>Klo: 7:05"],
  ["Viirun ja Pesosen joulukalenteri<br>Luukut 1-24 Any%", "La 14.11.<Br>Klo: 10:45"],
  ["The Sims Selviytymistarinat<br>Any%", "La 14.11.<Br>Klo: 11:35"],
  ["Spirit: Stallion of the Cimarron<br>Any%", "La 14.11.<Br>Klo: 13:15"],
  ["The Karters 2: Turbo Charged<br>16 Tracks Grand Prix", "La 14.11.<Br>Klo: 13:50"],
  ["Clockwork Ambrosia<br>True Ending", "La 14.11.<Br>Klo: 15:10"],
  ["Super Mario World<br>Any%", "La 14.11.<Br>Klo: 16:25"],
  ["Spacegulls<br>TAS", "La 14.11.<Br>Klo: 16:50"],
  ["EMUUROM<br>Blue Star ending", "La 14.11.<Br>Klo: 17:30"],
  ["Metroid Fusion<br>Any%", "La 14.11.<Br>Klo: 19:10"],
  ["Final Fantasy XII The Zodiac Age<br>PC Any%", "La 14.11.<Br>Klo: 20:50"],
  ["Mafia 3<br>All Districts (NFG Mod)", "Su 15.11.<Br>Klo: 0:50"],
  ["Valkyria Chronicles 4<br>Any%", "Su 15.11.<Br>Klo: 6:50"],
  ["Super Metroid Map Rando<br>Nyyppärace", "Su 15.11.<Br>Klo: 10:50"],
  ["Spyro: Year of the Dragon<br>100 egg", "Su 15.11.<Br>Klo: 13:30"],
  ["I've Got Some Balls<br>Any%", "Su 15.11.<Br>Klo: 14:55"],
  ["Hollow Knight<br>Any% NMG", "Su 15.11.<Br>Klo: 15:30"]
]

