const books = [
  {
    id: 1,
    bookName: "1984",
    writer: "George Orwell",
    description: `The book is set in 1984 in Oceania, one of three perpetually warring 
    totalitarian states (the other two are Eurasia and Eastasia). Oceania is governed by
     the all-controlling Party, which has brainwashed the population into unthinking 
     obedience to its leader, Big Brother. The Party has created a propagandistic language
      known as Newspeak, which is designed to limit free thought and promote the Party’s 
      
      doctrines. Its words include doublethink (belief in contradictory ideas simultaneously), which is reflected in the Party’s slogans: “War is peace,” “Freedom is slavery,” and “Ignorance is strength.” The Party maintains control through the Thought Police and continual surveillance.

      The book’s hero, Winston Smith, is a minor party functionary living in a London
       that is still shattered by a nuclear war that took place not long after World War II. He belongs to the Outer Party, and his job is to rewrite history in the Ministry of Truth, bringing it in line with current political thinking. However, Winston’s longing for truth and decency leads him to secretly rebel against the government. He embarks on a forbidden affair with Julia, a like-minded woman, and they rent a room in a neighbourhood populated by Proles (short for proletariats). Winston also becomes increasingly interested in the Brotherhood, a group of dissenters. Unbeknownst to Winston and Julia, however, they are being watched closely (ubiquitous posters throughout the city warn residents that “Big Brother is watching you.”).
      
      When Winston is approached by O’Brien—an official of the Inner Party who appears to be a secret member of the Brotherhood—the trap is set. O’Brien is actually a spy for the Party, on the lookout for “thought-criminals,” and Winston and Julia are eventually caught and sent to the Ministry of Love for a violent reeducation. The ensuing imprisonment, torture, and reeducation of Winston are intended not merely to break him physically or make him submit but to root out his independence and destroy his dignity and humanity. In Room 101, where prisoners are forced into submission by exposure to their worst nightmares, Winston panics as a cage of rats is attached to his head. He yells out for his tormentors to “Do it to Julia!” and states that he does not care what happens to her. With this betrayal, Winston is released. He later encounters Julia, and neither is interested in the other. Instead Winston loves Big Brother.`,
  },
  {
    id: 2,
    bookName: "The Da Vinci Code",
    writer: "Dan Brown",
    description: `Louvre curator and Priory of Sion grand master Jacques Saunière is fatally shot one night at the museum by an albino Catholic monk named Silas, who is working on behalf of someone he knows only as the Teacher, who wishes to discover the location of the "keystone," an item crucial in the search for the Holy Grail.

      After Saunière's body is discovered in the pose of the Vitruvian Man by Leonardo da Vinci, the police summon Harvard professor Robert Langdon, who is in town on business. Police captain Bezu Fache tells him that he was summoned to help the police decode the cryptic message Saunière left during the final minutes of his life. The message includes a Fibonacci sequence out of order.
      
      Langdon explains to Fache that Saunière was a leading authority on the subject of goddess artwork and that the pentacle Saunière drew on his chest in his own blood represents an allusion to the goddess and not devil worship, as Fache believes.
      
      Sophie Neveu, a police cryptographer, secretly explains to Langdon that she is Saunière's estranged granddaughter, and that Fache thinks Langdon is the murderer because the last line in her grandfather's message, which was meant for Neveu, said "P.S. Find Robert Langdon," which Fache had erased prior to Langdon's arrival. However, "P.S." actually refers to Sophie, as the nickname given to her by her grandfather is "Princess Sophie". It does not refer to "postscript". Neveu is troubled by memories of her grandfather's involvement in a secret pagan group. However, she understands that her grandfather intended Langdon to decipher the code, which leads them to a safe deposit box at the Paris branch of the Depository Bank of Zurich.
      
      
      Replica cryptex: prize from Google Da Vinci Code Quest Contest
      Neveu and Langdon escape from the police and visit the bank. In the safe deposit box they find a box containing the keystone: a cryptex, a cylindrical, hand-held vault with five concentric, rotating dials labeled with letters. When these are lined up correctly, they unlock the device. If the cryptex is forced open, an enclosed vial of vinegar breaks and dissolves the message inside the cryptex, which was written on papyrus. The box containing the cryptex contains clues to its password.
      
      Langdon and Neveu take the keystone to the home of Langdon's friend, Sir Leigh Teabing, an expert on the Holy Grail, the legend of which is heavily connected to the Priory. There, Teabing explains that the Grail is not a cup, but a tomb containing the bones of Mary Magdalene.`,
  },
  {
    id: 3,
    bookName: "The Alchemist",
    writer: "Paulo Coelho",
    description: `A recurring dream troubles Santiago, a young and adventurous
       Andalusian shepherd. He has the dream every time he sleeps under a sycamore
        tree that grows out of the ruins of a church. During the dream, a child tells him to seek treasure at the foot of the Egyptian pyramids. Santiago consults a gypsy woman to interpret the dream, and to his surprise she tells him to go to Egypt. A strange, magical old man named Melchizedek, who claims to be the King of Salem, echoes the gypsy’s advice and tells Santiago that it is his Personal Legend to journey to the pyramids. Melchizedek convinces Santiago to sell his flock and set off to Tangier. When Santiago arrives in Tangier, a thief robs him, forcing him to find work with a local crystal merchant. The conservative and kindly merchant teaches Santiago several lessons, and Santiago encourages the merchant to take risks with his business. The risks pay off, and Santiago becomes a rich man in just a year.

      Santiago decides to cash in his earnings and continue pursuing his Personal 
      Legend: to find treasure at the pyramids. He joins a caravan crossing the Sahara desert toward Egypt and meets an Englishman who is studying to become an alchemist. He learns a lot from the Englishman during the journey. For one, he learns that the secret of alchemy is written on a stone called the Emerald Tablet. The ultimate creation of alchemy is the Master Work, which consists of a solid called the Philosophers Stone that can turn lead to gold, and a liquid called the Elixir of Life that can cure all ills. Santiago learns the Englishman is traveling with the caravan to the Saharan oasis of Al-Fayoum, where a powerful, 200-year-old alchemist resides. The Englishman plans to ask the alchemist the secret of his trade.
      
      As it turns out, the caravan must make an extended stop in Al-Fayoum in order to avoid increasingly violent tribal wars taking place in the desert. There, Santiago falls in love with Fatima, who lives at the oasis. During a walk in the desert, Santiago witnesses an omen that portends an attack on the historically neutral oasis. He warns the tribal chieftains of the attack, and as a result, Al-Fayoum successfully defends itself against the assault. The alchemist gets word of Santiago’s vision and invites Santiago on a trip into the desert, during which he teaches Santiago about the importance of listening to his heart and pursuing his Personal Legend. He convinces Santiago to leave Fatima and the caravan for the time to finish his journey to the pyramids, and he offers to accompany Santiago on the next leg of his trip.`,
  },
  {
    id: 4,
    bookName: "Animal Farm",
    writer: "George Orwell",
    description: `Old Major, a prize-winning boar, gathers the animals of the Manor Farm for a meeting in the big barn. He tells them of a dream he has had in which all animals live together with no human beings to oppress or control them. He tells the animals that they must work toward such a paradise and teaches them a song called “Beasts of England,” in which his dream vision is lyrically described. The animals greet Major’s vision with great enthusiasm. When he dies only three nights after the meeting, three younger pigs—Snowball, Napoleon, and Squealer—formulate his main principles into a philosophy called Animalism. Late one night, the animals manage to defeat the farmer Mr. Jones in a battle, running him off the land. They rename the property Animal Farm and dedicate themselves to achieving Major’s dream. The cart-horse Boxer devotes himself to the cause with particular zeal, committing his great strength to the prosperity of the farm and adopting as a personal maxim the affirmation “I will work harder.”

      At first, Animal Farm prospers. Snowball works at teaching the animals to read, and Napoleon takes a group of young puppies to educate them in the principles of Animalism. When Mr. Jones reappears to take back his farm, the animals defeat him again, in what comes to be known as the Battle of the Cowshed, and take the farmer’s abandoned gun as a token of their victory. As time passes, however, Napoleon and Snowball increasingly quibble over the future of the farm, and they begin to struggle with each other for power and influence among the other animals. Snowball concocts a scheme to build an electricity-generating windmill, but Napoleon solidly opposes the plan. At the meeting to vote on whether to take up the project, Snowball gives a passionate speech. Although Napoleon gives only a brief retort, he then makes a strange noise, and nine attack dogs—the puppies that Napoleon had confiscated in order to “educate”—burst into the barn and chase Snowball from the farm. Napoleon assumes leadership of Animal Farm and declares that there will be no more meetings. From that point on, he asserts, the pigs alone will make all of the decisions—for the good of every animal.`,
  },
];

export default books;
