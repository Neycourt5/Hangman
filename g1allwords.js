const allWords = ["about", "abroad", "active", "activity", "actor", "after", "afternoon", "age", "album", "all", "all right", "after school", "all over the world", "almost", "also", "always", "am", "amazing", "amusement park", "an", "and", "and you?", "angry", "animal", "ant", "any", "anything", "apple", "april", "aquarium", "are", "aren't", "Argentina", "around", "art", "artist", "as", "ask", "astronaut", "astronomy", "at", " at home", "be good at", "look at", "ate", "athlete", "atmosphere", "August", "aunt", "Australia", "away", "get away", "put away", "back", "bacon", "bad", "That's too bad", "badminton", "bag", "bake", "ball", "balloon", "banana", "barbecue", "baseball", "basketball", "bath", "take a bath", "be", "beach", "bean", "bear", "beautiful", "bed", "go to bed", "in bed", "bee", "beef", "before", "behind", "bell", "belt", "best", "between", "bicycle", "big", "bird", "birthday", "bit", "a little bit", "black", "blackboard", "blue", "book", "bookstore", "bored", "boring", "bottled", "bought", "box", "brass band", "brave", "Brazil", "bread", "break", "breakfast", "bring", "brother", "brown", "brush", "bug", "building", "bulldog", "bus", "busy", "but", "butterfly", "buy", "by", "by oneself", "by the way", "cabbage", "cafe", "cafeteria", "cake", "call", "calligraphy", "came", "camping", "can", "Canada", "candy", "cannot", "can't", "cap", "car", "card", "care", "Take care", "carrot", "case", "cat", "catch", "caught", "cellphone", "ceremony", "chair", "chalk", "change", "charm", "chat", "check", "cheer", "cheer up", "cheerful", "cheese", "chef", "cherry", "chess", "chew", "chicken", "China", "chocolate", "choose", "chorus", "Christmas", "class", "class schedule", "classmate", "classroom", "clean", "clear", "clear the table", "climb", "climb up", "closing", "clothes", "cloudy", "club", "coat", "coffee", "cold", "have a cold", "color", "colorful", "come", "come in", "come from", "comedian", "comedy", "comic", "communication", "computer", "concert", "contact", "contest", "convenience store", "cook", "cookie", "cooking", "cool", "corn", "course", "of course", "cousin", "cow", "creative", "cry", "cucumber", "cup", "curry", "custom", "cut", "cute", "dad", "daily", "dance", "dancer", "date", "day", "these days", "one day", "dear", "December", "decorate", "decoration", "deer", "delicious", "department store", "designer", "desk", "diary", "dictionary", "did", "didn't", "different", "difficult", "dinner", "dirty", "dish", "wash the dishes", "do", "dodgeball", "does", "doesn't", "dog", "dollar", "dolphin", "don't", "donut", "drama", "draw", "dress", "drink", "drum", "during", "each", "early", "easily", "easy", "eat", "egg", "Egypt", "eight", "eighteen", "eighteenth", "eighth", "eighty", "eighter", "elementary", "elementary school", "elephant", "eleven", "eleventh", "else", "anything else?", "e-mail", "engineer", "English", "enjoy", "entrance", "eraser", "eve", "event", "every", "every year", "every day", "everyone", "everything", "exam", "excited", "exciting", "eye", "face", "fair", "fall", "family", "famous", "fan", "fantastic", "far", "fast", "father", "favorite", "February", "fed", "feed", "feeling", "festival", "fever", "have a fever", "field", "field trip", "fifteen", "fifteenth", "fifth", "fifty", "fine", "firework", "first", "fish", "fishing", "five", "floor", "flower", "flute", "fly", "follow", "food", "foot", "on foot", "for", "forty", "forward", "look forward to", "four", "fourteen", "fourteenth", "fourth", "fox", "France", "free", "French fries", "Friday", "fried", "friend", "friendly", "frog", "from", "I'm from", "come from", "front", "in front of", "fruit", "fun", "funny", "future", "in the future", "game", "gap", "garbage", "take out the garbage", "gate", "get", "get up", "get well", "get ready", "get on", "get away", "giraffe", "give", "give up", "glasses", "glove", "glue", "go", "go shopping", "go to bed", "go on a trip", "goal", "good", "gorilla", "got", "graduation", "grandfather", "grandma", "grandmother", "grandpa", "grandparent", "grape", "grass", "great", "green", "green pepper", "green tea", "grilled", "guitar", "gym", "had", "hallway", "hamburger", "happy", "Happy New Year", "Happy birthday", "hard", "has", "hat", "have", "have a cold", "have a fever", "he", "hear", "heard", "heavy", "hello", "help", "her", "here", "Here we go!", "here's", "hers", "he's", "hey", "hi", "high", "hiking", "him", "his", "hit", "hobby", "holiday", "home", "at home", "homework", "hope", "horse", "hospital", "hot", "hot spring", "house", "how", "How are you?", "How about", "How's everything?", "How many?", "How much?", "how's", "hug", "hundred", "hungry", "hunter", "I", "ice cream", "I'd", "idea", "This is a good idea", "I have no idea", "ideal", "I'm", "impressed", "in", "in front of", "in bed", "in the future", "in total", "India", "indoors", "ink", "inside", "instrument", "interested", "be interested in", "interesting", "internet", "is", "isn't he?", "isn't", "is not", "it", "Italy", "item", "its", "it's", "jacket", "jam", "January", "Japan", "Japanese", "jean", "jet", "jogging", "join", "journalist", "juice", "July", "jump", "June", "jungle", "junior", "junior high school", "just", "keep", "keep one's promise", "kept", "key", "kind", "king", "kitchen", "kite", "know", "I didn't know that", "koala", "Korea", "lantern", "last", "last year", "late", "later", "see you later", "lawyer", "lazy", "leave", "left", "leg", "lemon", "lesson", "let's", "letter", "library", "life", "light", "like", "Which would you like", "I'd like", "like", "line", "in line", "lion", "listen", "listen to", "little", "a little", "a little bit", "live", "live in", "London", "long", "look", "look at", "look forward to", "lorry", "Los Angeles", "lost", "lot", "a lot of", "loud", "love", "luck", "lucky", "lunch", "made", "main", "make", "mall", "many", "how many", "map", "marathon", "March", "marker", "market", "math", "May", "may", "maybe", "me", "me, too", "meat", "meet", "melon", "message", "middle", "milk", "mine", "minute", "miss", "mix", "mom", "Monday", "monkey", "month", "mop", "morning", "mother", "mountain", "mouse", "movie", "Mr.", "Ms.", "Mt.", "much", "museum", "mushroom", "music", "musician", "my", "mysterious", "name", "nap", "near", "need", "neighbor", "Nepal", "nervous", "net", "never", "new", "newspaper", "New Year", "New Year holiday", "New Year's card", "New Year's Day", "New Year's Eve", "New York", "next", "next to", "nice", "That's nice", "Nice to meet you", "nine", "nineteen", "nineteenth", "ninety", "ninth", "no", "noodle", "not", "note", "notebook", "nothing", "November", "now", "number", "nurse", "nut", "o'clock", "October", "octopus", "of", "off", "office", "often", "oh", "Oh no", "OK", "old", "years old", "omelet", "on", "on foot", "one", "one day", "onion", "open", "opening", "or", "orange", "other", "our", "ours", "out", "outdoor", "outdoors", "over", "over there", "own", "pancake", "panda", "pants", "paper", "parade", "pardon", "pardon?", "parent", "park", "party", "P.E.", "peach", "pen", "pencil", "pencil case", "penguin", "people", "perform", "pet", "Philippines", "phone", "photo", "photographer", "piano", "picnic", "picture", "take a picture", "pie", "pig", "pin", "pineapple", "pink", "pizza", "place", "plane", "play", "player", "please", "poodle", "pool", "poor", "popcorn", "pop music", "popular", "pork", "postcard", "poster", "potato", "practice", "present", "pretty", "pro", "program", "promise", "pudding", "Puerto Rico", "pumpkin", "purple", "put", "put away", "queen", "quiet", "rabbit", "race", "racket", "rainy", "ran", "rang", "read", "ready", "get ready", "really", "really?", "red", "regard", "relax", "repeat", "Repeat after me", "response", "rest", "restaurant", "restroom", "ribbon", "rice", "rice ball", "rice cake", "ride", "right", "that's right", "ring", "roar", "robot", "rode", "Romania", "room", "rope", "rugby", "ruler", "run", "running", "sad", "salad", "same", "sandwich", "sang", "Saturday", "sausage", "saw", "say", "scarf", "scary", "schedule", "school", "school principle", "school trip", "schoolyard", "science", "scientist", "scissor", "sea", "seashell", "seashore", "season", "second", "secret", "see", "I see", "sell", "send", "September", "serve", "set", "set the table", "seven", "seventeenth", "seventeen", "seventh", "seventy", "shaved ice", "she", "sheep", "she's", "shirt", "shoe", "shopping", "go shopping", "short", "show", "shrine", "shy", "side", "sign", "sincerely", "sing", "singer", "sister", "sit", "six", "sixteen", "sixteenth", "sixth", "sixty", "skateboard", "skating", "ski", "skiing", "skirt", "sleep", "sleepy", "slept", "slipper", "small", "smart", "smile", "snack", "snake", "snow", "snowy", "so", "soccer", "social studies", "sock", "soft", "softball", "some", "someday", "sometimes", "song", "soon", "sorry", "sorry to hear that", "sound", "sounds fun", "soup", "spaghetti", "speak", "special", "speech", "breakfast special", "spider", "sport", "spring", "stadium", "stage", "stair", "stapler", "station", "stationary", "stay", "stay up", "steak", "step", "watch one's step", "stick", "still", "store", "strawberry", "strict", "strong", "student", "study", "subject", "subway", "successful", "summer", "sun", "Sunday", "sunny", "sunrise", "supermarket", "sure", "surf", "surprise", "surprised", "swam", "sweater", "sweep", "swim", "swimming", "Sydney", "table", "table tennis", "take", "take a picture", "take off", "take out", "take out the garbage", "take a bath", "take a walk", "take a class", "talent", "talk", "talk to", "task", "tea", "teacher", "team", "teammate", "teeth", "tell", "temple", "ten", "tennis", "tenth", "term", "terrible", "textbook", "thank", "thank you", "thanks", "that", "that's", "the", "their", "theirs", "them", "there", "these", "they", "they're", "thing", "think", "What do you think", "third", "thirsty", "thirteen", "thirteenth", "thirtieth", "thirty", "thirty-first", "thirty-one", "this", "this weekend", "those", "three", "Thursday", "tidy", "tie", "tiger", "time", "What time is it", "tired", "to", "toast", "together", "told", "tomato", "tongue twister", "too", "Me, too", "took", "top", "topic", "total", "in total", "tough", "tournament", "track", "track and field", "traditional", "train", "trash", "trash can", "travel", "trip", "go on a trip", "true", "trumpet", "try", "T-shirt", "Tuesday", "turn", "turn around", "turtle", "TV", "twelfth", "twelve", "twentieth", "twenty", "twenty-one", "two", "U.K.", "uncle", "under", "underwater", "unicycle", "uniform", "unlucky", "up", "us", "the United States", "use", "usually", "vacation", "vegetable", "very", "very much", "vest", "vet", "video", "video game", "visit", "voice", "volleyball", "volunteer", "wait", "I can't wait", "walk", "walk to school", "take a walk", "wall", "wallet", "want", "want to", "warm", "was", "wash", "wash the dishes", "wasn't", "watch", "watch me", "watch one's step", "water", "watermelon", "way", "by the way", "we", "wear", "weather", "Wednesday", "weekday", "weekend", "welcome", "welcome to", "well", "get well", "get well soon", "went", "were", "we're", "weren't", "wet", "whale", "what", "what time is it?", "what do you think?", "what's", "when", "where", "which", "which would you like?", "white", "who", "whose", "why", "win", "window", "windy", "winter", "wipe", "wish", "with", "wonderful", "wood", "work", "world", "all over the world", "worry", "don't worry", "would", "wow", "write", "writer", "wrong", "wrote", "yacht", "yeah", "year", "yellow", "yes", "yesterday", "yogurt", "you", "your", "you're", "yours", "yourself", "yo-yo", "zebra", "zero", "zoo"]


const change = document.querySelector("#change")
const disp = document.querySelector("#word");
const keyboardkey = document.querySelectorAll(".keyboardkey")
const wrong = document.querySelector(".wrong");
const lives = document.querySelector(".lives");
lives.style.color = "green";
let livesnum = 15;
lives.textContent = livesnum;
let word = [];
let hiddenword = [];
let wronglet = [];

change.addEventListener("click", (e) => {
    resetGame();
    for (let i = 0; i < keyboardkey.length; i++) {
        keyboardkey[i].classList.remove("pressed")
    }
    let num = Math.floor(Math.random() * allWords.length);
    let letters = allWords[num].split("");
    for (i = 0; i < letters.length; i++) {
        word.push(letters[i]);
    }
    for (i = 0; i < word.length; i++) {
        hiddenword[i] = word[i];
        if (word[i] === " ") {
            hiddenword.push("&nbsp;");
            hiddenword.push("&nbsp;");
        }
        if (word[i].match(/[a-z]/i)) {
            hiddenword[i] = (" _ ")
        }
    }
    disp.textContent = hiddenword.join("");

})

for (let i = 0; i < keyboardkey.length; i++) {
    keyboardkey[i].addEventListener("click", (e) => {
        checkforletter(e.target.textContent);
        keyboardkey[i].classList.add("pressed");
    })
}

const checkforletter = (letter) => {
    for (i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            hiddenword[i] = letter.toLowerCase();
            if (word[i] === word[i].toUpperCase()) {
                hiddenword[i] = ` ${letter.toUpperCase()} `;
            }
            disp.textContent = hiddenword.join(" ");
        }
    }
    if (!word.join("").includes(letter.toLowerCase()) && !word.join("").includes(letter.toUpperCase())) {
        if (!wronglet.join("").includes(letter)) {
            wronglet.push(letter);
            //wrong.append(`${letter} `);
            livesnum--;
            lives.textContent = livesnum;

            if (livesnum >= 7) {
                lives.style.color = "green";
            }
            if (livesnum >= 4 && livesnum < 7) {
                lives.style.color = "orange";
            }
            if (livesnum < 4) {
                lives.style.color = "red";
            }

        }
    }
    if (hiddenword.join("") === word.join("")) {
        disp.style.color = "green";
    }
}

const resetGame = () => {
    word = [];
    hiddenword = [];
    wronglet = [];
    disp.style.color = "black";
    wrong.textContent = "";
    livesnum = 15;
    lives.textContent = livesnum;
    lives.style.color = "green";
}


