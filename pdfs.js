// PDF data with title and link pairs 
const pdfData = [
    {
        title: "New Book Title", // Replace with your actual book title
        author: "Author Name", // Replace with actual author
        description: "Book description goes here", // Optional
        link: "https://t.me/c/2059242652/your_link_number", // Replace with your Telegram link
        category: "Your Category" // Choose an appropriate category
    },
    {
        title: "හොල්මන් වලව්ව",
        link: "https://t.me/c/2059242652/2462",
        category: "Horror"
    },
    {
        title: "බොරළු වලව්ව", // Added comma
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/2461",
        category: "Originals"
    },
    {
        title: "ඕලන්ද නෞකාව",
        link: "https://t.me/c/2059242652/2460",
        category: "Translation"
    },
    {
        title: "හොල්මන් වලව්ව",
        link: "https://t.me/c/2059242652/2462",
        category: "Horror"
    },
    {
        title: "බොරළු වලව්ව", // Added comma
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/2461",
        category: "Originals"
    },
    {
        title: "ඕලන්ද නෞකාව",
        link: "https://t.me/c/2059242652/2460",
        category: "Translation"
    },
    {
        title: "ඇට මැස්සා",
        description: "The Gadfly",
        link: "https://t.me/c/2059242652/2459",
        category: "Translation"
    },
    {
        title: "නීල් නෙතු ඔබේ හදවත මගේ",
        link: "https://t.me/c/2059242652/2458",
        category: "Romance"
    },
    {
        title: "තමන්ගේ වැඩක් බලාගන්න",
        link: "https://t.me/c/2059242652/2457",
        category: "Self Help"
    },
    {
        title: "බොර්කෙන් මාලිගාවේ වික්‍රමය",
        link: "https://t.me/c/2059242652/2456",
        category: "Translation"
    },
    {
        title: "පර්සෝනා",
        link: "https://t.me/c/2059242652/2455",
        category: "Originals"
    },
    {
        title: "ආදරෙයි උතුරන්න",
        author: "සමෝදි බණ්ඩාර",
        link: "https://t.me/c/2059242652/2454",
        category: "Romance"
    },
    {
        title: "කම්මැළි මොළේ",
        author: "චන්දන සූරියබණ්ඩාර",
        link: "https://t.me/c/2059242652/2453",
        category: "Self Help"
    },
    {
        title: "කදුලු කුණාටුව",
        link: "https://t.me/c/2059242652/2452",
        category: "Originals"
    },
    {
        title: "පොලියානා 2: සතුට බෙදන පොලියානා",
        link: "https://t.me/c/2059242652/2451",
        category: "Translation"
    },
    {
        title: "මේ ඇගේ කතාව නොව ඇගේ මරණයේ කතාවයි",
        link: "https://t.me/c/2059242652/2450",
        category: "Originals"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        description: "An easy and proven way to build good habits",
        link: "https://t.me/c/2059242652/2448",
        category: "Self Help"
    },
    {
        title: "තාරගයේ වීරයා",
        author: "කැළුම් වැලිගම",
        link: "https://t.me/c/2059242652/2447",
        category: "Originals"
    },
    {
        title: "මැරයෙකුගේ පතිනිය",
        link: "https://t.me/c/2059242652/2446",
        category: "Originals"
    },
    {
        title: "එදා හෙළදිව",
        link: "https://t.me/c/2059242652/2445",
        category: "History"
    },
    {
        title: "හදවත් වරක් 2",
        author: "නිලූකා බ්‍රැන්ඩන්",
        link: "https://t.me/c/2059242652/2444",
        category: "Romance"
    },
    {
        title: "මිනිසාගේ සම්භවය",
        description: "Human Evolution",
        link: "https://t.me/c/2059242652/2443",
        category: "Science Fiction"
    },
    {
        title: "The Convoluted Universe Book 5",
        link: "https://t.me/c/2059242652/2442",
        category: "Science Fiction"
    },
    {
        title: "විශ්ව සාහිත්‍යයේ අද්භූත කතා",
        link: "https://t.me/c/2059242652/2441",
        category: "Translation"
    },
    {
        title: "අම්මපයි, මං කඩුව දුන්නා",
        author: "ශෂික සදීප්",
        link: "https://t.me/c/2059242652/2440",
        category: "Originals"
    },
    {
        title: "රණ මඟ ඔස්සේ නන්දිකඩාල්",
        author: "කමල් ගුණරත්න",
        link: "https://t.me/c/2059242652/2439",
        category: "History"
    },
    {
        title: "ආදර තුත්තිරි",
        author: "කේලි ආරාධ්‍යා",
        link: "https://t.me/c/2059242652/2438",
        category: "Romance"
    },
    {
        title: "නිර්මාණා",
        link: "https://t.me/c/2059242652/2437",
        category: "Originals"
    },
    {
        title: "The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        description: "A Fable About Fulfilling Your Dreams",
        link: "https://t.me/c/2059242652/2436",
        category: "Self Help"
    },
    {
        title: "ජීවිතය වෙනස් කරන කතා 1",
        author: "කැළුම් වැලිගම",
        link: "https://t.me/c/2059242652/2434",
        category: "Self Help"
    },
    {
        title: "සොහොන් බිමේ ශාපය",
        link: "https://t.me/c/2059242652/2433",
        category: "Horror"
    },
    {
        title: "අසිහි කස්තුරි සුවද 02",
        link: "https://t.me/c/2059242652/2432",
        category: "Originals"
    },
    {
        title: "ආතර් සී ක්ලාක් ලොව විශිෂ්ඨතම විද්‍යා ප්‍රබන්ධ කෙටිකතා එකතුව",
        author: "Arthur C Clarke",
        link: "https://t.me/c/2059242652/2431",
        category: "Science Fiction"
    },
    {
        title: "ශ්‍රේෂ්ඨත්වයේ සෙවනැල්ල",
        author: "ආතර් කොනන් ඩොයිල්",
        link: "https://t.me/c/2059242652/2430",
        category: "Translation"
    },
    {
        title: "වෛද්‍ය විල්ගේ විස්මිත ලෝකය",
        author: "අභය හේවාවසම්",
        link: "https://t.me/c/2059242652/2429",
        category: "Translation"
    },
    {
        title: "ෂර්ලොක් හෝම්ස් ආපසු එයි",
        author: "Arthur Conan Doyle",
        link: "https://t.me/c/2059242652/2428",
        category: "Translation"
    },
    {
        title: "පෘතුගීසිහු ලක්දිවට ගොඩ බසිති",
        link: "https://t.me/c/2059242652/2427",
        category: "History" // Fixed stray quote
    },
    {
        title: "මණි මේඛලා",
        link: "https://t.me/c/2059242652/2426",
        category: "Originals" // Fixed stray quote
    },
    {
        title: "දෙල් ගහ යට පුන්චි ගෙදර",
        link: "https://t.me/c/2059242652/2425",
        category: "Kids" // Fixed stray quote
    },
    {
        title: "අදුර ඉරා",
        link: "https://t.me/c/2059242652/2424",
        category: "Originals" // Fixed stray quote
    },
    {
        title: "අපූරු ඉස්කෝලේ හිම මිදෙන කාලේ part 11",
        link: "https://t.me/c/2059242652/2423",
        category: "Kids" // Fixed stray quote
    },
    {
        title: "අපූරු ඉස්කොලේ අවසන් වාරේ",
        link: "https://t.me/c/2059242652/2422",
        category: "Kids" // Fixed stray quote
    },
    {
        title: "අපූරු ඉස්කෝලේ අපූරු දවස්",
        link: "https://t.me/c/2059242652/2421",
        category: "Kids" // Fixed stray quote
    },
    {
        title: "ප්‍රබුද්ධ",
        author: "මහගම සේකර",
        link: "https://t.me/c/2059242652/2420",
        category: "Originals"
    },
    {
        title: "මරණාසන්න අත්දැකීමක්!",
        link: "https://t.me/c/2059242652/2419",
        category: "General"
    },
    {
        title: "සුදු තල්මසාගෙන් පළිගැනීම",
        link: "https://t.me/c/2059242652/2418",
        category: "Translation" // Fixed stray quote
    },
    {
        title: "ලීලා",
        author: "මාර්ටින් වික්‍රමසිංහ",
        link: "https://t.me/c/2059242652/2417",
        category: "Originals" // Fixed stray quote
    },
    {
        title: "මාදොළ දූව",
        author: "මාර්ටින් වික්‍රමසිංහ",
        link: "https://t.me/c/2059242652/2416",
        category: "Kids" // Fixed stray quote
    },
    {
        title: "ගම්පෙරළිය",
        author: "මාර්ටින් වික්‍රමසිංහ",
        link: "https://t.me/c/2059242652/2415",
        category: "Originals" // Fixed stray quote
    },
    {
        title: "විරාගය",
        author: "මාර්ටින් වික්‍රමසිංහ",
        link: "https://t.me/c/2059242652/2414",
        category: "Originals" // Fixed stray quote
    },
    {
        title: "අප්පච්චි ඇවිත්",
        link: "https://t.me/c/2059242652/2413",
        category: "Originals" // Fixed stray quote
    },
    {
        title: "හන්තානේ කතාව",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2412",
        category: "Originals"
    },
    {
        title: "කලි යුගය",
        author: "මාර්ටින් වික්‍රමසිංහ",
        link: "https://t.me/c/2059242652/2401",
        category: "Originals"
    },
    {
        title: "The 5 AM Club",
        author: "Robin Sharma",
        link: "https://t.me/c/2059242652/2393",
        category: "Self Help"
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        link: "https://t.me/c/2059242652/2392",
        category: "Self Help"
    },
    {
        title: "පිච්ච මල",
        author: "ජයසේන ජයකොඩි",
        link: "https://t.me/c/2059242652/2391",
        category: "Originals"
    },
    {
        title: "Harry Potter and the Cursed Child",
        link: "https://t.me/c/2059242652/2389",
        category: "Translation"
    },
    {
        title: "බෙරගල කන්දේ නිධානය 2",
        link: "https://t.me/c/2059242652/2388",
        category: "Originals"
    },
    {
        title: "බෙරගල කන්දේ නිධානය 1",
        link: "https://t.me/c/2059242652/2387",
        category: "Originals"
    },
    {
        title: "Sherlock Holmes 14 - Draculaට එරෙහිව Sherlock Holmes",
        link: "https://t.me/c/2059242652/2386",
        category: "Translation"
    },
    {
        title: "යේසුස් නම් බුද්ධ ශ්‍රාවකයාණෝ",
        link: "https://t.me/c/2059242652/2385",
        category: "Religion"
    },
    {
        title: "ලස්සන වසිලිස්සා",
        link: "https://t.me/c/2059242652/2383",
        category: "Kids"
    },
    {
        title: "කම්බිලි",
        author: "අපුර්වා මන්දාරම්",
        link: "https://t.me/c/2059242652/2382",
        category: "Originals"
    },
    {
        title: "කඩවර",
        author: "අපුර්වා මන්දාරම්",
        link: "https://t.me/c/2059242652/2381",
        category: "Originals"
    },
    {
        title: "The Lost Hero",
        author: "Rick Riordan",
        description: "The Heroes of Olympus 1",
        link: "https://t.me/c/2059242652/2379",
        category: "Translation"
    },
    {
        title: "The Mark of Athena",
        author: "Rick Riordan",
        description: "The Heroes of Olympus 3",
        link: "https://t.me/c/2059242652/2378",
        category: "Translation"
    },
    {
        title: "The Complete Guide To Investing In Gold And Silver",
        link: "https://t.me/c/2059242652/2377",
        category: "General"
    },
    {
        title: "රතු පිරමීඩය",
        author: "Rick Riordan",
        description: "The Kane Chronicles",
        link: "https://t.me/c/2059242652/2376",
        category: "Translation"
    },
    {
        title: "At least we met",
        author: "රංගනී ෆර්නෑන්ඩු",
        link: "https://t.me/c/2059242652/2375",
        category: "Romance"
    },
    {
        title: "නිලම්බරේ 4",
        link: "https://t.me/c/2059242652/2374",
        category: "Originals"
    },
    {
        title: "නිලම්බරේ 3",
        link: "https://t.me/c/2059242652/2373",
        category: "Originals"
    },
    {
        title: "නිලම්බරේ 2",
        link: "https://t.me/c/2059242652/2372",
        category: "Originals"
    },
    {
        title: "නිලම්බරේ 1",
        link: "https://t.me/c/2059242652/2371",
        category: "Originals"
    },
    {
        title: "නපුරු සුරංගනාවී St Clare's",
        link: "https://t.me/c/2059242652/2370",
        category: "Kids"
    },
    {
        title: "Hunger Games",
        link: "https://t.me/c/2059242652/2369",
        category: "Translation"
    },
    {
        title: "පෙපර් මින්ට්",
        link: "https://t.me/c/2059242652/2368",
        category: "Originals"
    },
    {
        title: "කාසියේ ශාපය බිගල්ස් ගේ වික්‍රම",
        link: "https://t.me/c/2059242652/2367",
        category: "Translation"
    },
    {
        title: "කුලුදුල්",
        link: "https://t.me/c/2059242652/2366",
        category: "Originals"
    },
    {
        title: "අම්මා",
        author: "මැක්සිම් ගෝර්කි",
        link: "https://t.me/c/2059242652/2365",
        category: "Translation"
    },
    {
        title: "මැයි මාර ප්‍රසංගය",
        author: "මහින්ද ප්‍රසාද් මස්ඉඹුල",
        link: "https://t.me/c/2059242652/2364",
        category: "Originals"
    },
    {
        title: "බිගල්ස් ආක්‍රමණය",
        link: "https://t.me/c/2059242652/2363",
        category: "Translation"
    },
    {
        title: "හදවතේ උසාවිය",
        link: "https://t.me/c/2059242652/2362",
        category: "Originals"
    },
    {
        title: "කොලපාට ඇස්",
        description: "May December Romance",
        link: "https://t.me/c/2059242652/2361",
        category: "Romance"
    },
    {
        title: "3001",
        author: "Arthur C Clarke",
        link: "https://t.me/c/2059242652/2359",
        category: "Science Fiction"
    },
    {
        title: "ධීර් ධාරා",
        link: "https://t.me/c/2059242652/2358",
        category: "Originals"
    },
    {
        title: "ලොවීනා",
        author: "මොහාන් රාජ් මඩවල",
        link: "https://t.me/c/2059242652/2357",
        category: "Originals"
    },
    {
        title: "අරාබි නිසොල්ලාසය (2)",
        link: "https://t.me/c/2059242652/2356",
        category: "Translation"
    },
    {
        title: "අරාබි නිසොල්ලාසය(1)",
        link: "https://t.me/c/2059242652/2355",
        category: "Translation"
    },
    {
        title: "අරණකට පෙම් බැද",
        link: "https://t.me/c/2059242652/2354",
        category: "Originals"
    },
    {
        title: "සෙංකොට්ටන්",
        link: "https://t.me/c/2059242652/2353",
        category: "Originals"
    },
    {
        title: "ද්වාරි ස්වර",
        author: "තිසරණී ඩී නිර්මාණි",
        link: "https://t.me/c/2059242652/2352",
        category: "Originals"
    },
    {
        title: "ඉතිං මට සමාවෙන්න",
        link: "https://t.me/c/2059242652/2350",
        category: "Originals"
    },
    {
        title: "The Attitude of Gratitude",
        link: "https://t.me/c/2059242652/2348",
        category: "Self Help"
    },
    {
        title: "රිදී තැන්නේ අබිරහස",
        link: "https://t.me/c/2059242652/2347",
        category: "Translation"
    },
    {
        title: "මහල්ලා සහ මුහුද",
        author: "Ernest Hemingway",
        link: "https://t.me/c/2059242652/2346",
        category: "Translation"
    },
    {
        title: "Disparue",
        author: "HKS",
        link: "https://t.me/c/2059242652/2344",
        category: "Originals"
    },
    {
        title: "The Daily Lesson",
        description: "366 Essays to Challenge Your Status Quo",
        link: "https://t.me/c/2059242652/2343",
        category: "Self Help"
    },
    {
        title: "සුදු අක්කා 3",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2342",
        category: "Originals"
    },
    {
        title: "යෞවන සමීන්ද්‍ර ඒ මගේ මලයි 1",
        link: "https://t.me/c/2059242652/2336",
        category: "Romance"
    },
    {
        title: "මගේ කුලුදුල් පෙම්වතිය",
        link: "https://t.me/c/2059242652/2335",
        category: "Romance"
    },
    {
        title: "රැම්සිස්",
        link: "https://t.me/c/2059242652/2334",
        category: "Translation"
    },
    {
        title: "රැම්සීස් (අඩු පිටු ටික)",
        link: "https://t.me/c/2059242652/2333",
        category: "Translation"
    },
    {
        title: "ඇහැළ මලට දම් පාටක්",
        author: "චතුරි දමයන්ති",
        link: "https://t.me/c/2059242652/2332",
        category: "Romance"
    },
    {
        title: "එතැන මා තනිව නිදනා තැන",
        author: "දඩබ්බරයා",
        link: "https://t.me/c/2059242652/2331",
        category: "Originals"
    },
    {
        title: "කාන්තාරයේ දරුවෝ",
        link: "https://t.me/c/2059242652/2330",
        category: "Translation"
    },
    {
        title: "කඩතුරාව",
        author: "අගතා ක්‍රිස්ටි",
        link: "https://t.me/c/2059242652/2329",
        category: "Translation"
    },
    {
        title: "මල්ලිගේ විත්ති",
        author: "ගුණදාස ලියනගේ",
        link: "https://t.me/c/2059242652/2328",
        category: "Originals"
    },
    {
        title: "ලැවෙන්ඩර්",
        link: "https://t.me/c/2059242652/2327",
        category: "Originals"
    },
    {
        title: "අසුර ධ්‍යානවේදයේ මහා නිමැවුම්කරු (sample)",
        link: "https://t.me/c/2059242652/2325",
        category: "Science Fiction"
    },
    {
        title: "මිනිත්තු 11 කතන්දරේ",
        author: "Paulo Coelho",
        link: "https://t.me/c/2059242652/2324",
        category: "Translation"
    },
    {
        title: "11:11",
        author: "ප්‍රමේෂ් වික්‍රමසිංහ",
        link: "https://t.me/c/2059242652/2323",
        category: "Originals"
    },
    {
        title: "හංස ගිගිරුම්",
        author: "වත්සලා කරුණාරත්න",
        link: "https://t.me/c/2059242652/2322",
        category: "Originals"
    },
    {
        title: "වානේ පන්නරය ලැබූ හැටි",
        link: "https://t.me/c/2059242652/2321",
        category: "Translation"
    },
    {
        title: "මාගම් සොලිය",
        link: "https://t.me/c/2059242652/2320",
        category: "Originals"
    },
    {
        title: "චිත්තවේග හා මනෝවිද්‍යාව",
        link: "https://t.me/c/2059242652/2318",
        category: "General"
    },
    {
        title: "මනෝ ඉතිහාසය",
        description: "Psychohistory",
        link: "https://t.me/c/2059242652/2317",
        category: "Science Fiction"
    },
    {
        title: "අධ්‍යාත්මික සංවර්ධන මනෝවිද්‍යාව",
        link: "https://t.me/c/2059242652/2316",
        category: "General"
    },
    {
        title: "බයෝ කරපූ ඒ ලෙවල්",
        link: "https://t.me/c/2059242652/2314",
        category: "Originals"
    },
    {
        title: "මන්දෝදරී",
        link: "https://t.me/c/2059242652/2313",
        category: "Originals"
    },
    {
        title: "ෂර්ලෝක් හෝම්ස් වගේ හිතන්නේ කොහොමද?",
        link: "https://t.me/c/2059242652/2310",
        category: "Self Help"
    },
    {
        title: "ගුරු ගීතය",
        author: "Chinghiz Aitmatov",
        link: "https://t.me/c/2059242652/2309",
        category: "Translation"
    },
    {
        title: "Atomic Habits 3",
        link: "https://t.me/c/2059242652/2308",
        category: "Self Help"
    },
    {
        title: "Atomic Habits",
        link: "https://t.me/c/2059242652/2307",
        category: "Self Help"
    },
    {
        title: "Atomic Habits (Level 01)",
        link: "https://t.me/c/2059242652/2306",
        category: "Self Help"
    },
    {
        title: "ඉතින් කවියනි හොදට නින්ද යනවද රෑට?",
        link: "https://t.me/c/2059242652/2305",
        category: "Poems"
    },
    {
        title: "Chronicles From The Future (සිංහල)",
        description: "The amazing story of Paul Amadeus Dienach",
        link: "https://t.me/c/2059242652/2304",
        category: "Translation"
    },
    {
        title: "සන්තියාගෝ නම් සැරිසරන්නා",
        description: "The Alchemist",
        author: "Paulo Coelho",
        link: "https://t.me/c/2059242652/2303",
        category: "Translation"
    },
    {
        title: "ලිලැක්",
        link: "https://t.me/c/2059242652/2302",
        category: "Originals"
    },
    {
        title: "බටලන්දට ගිනි තැබුවෙමු 2",
        link: "https://t.me/c/2059242652/2300",
        category: "Originals"
    },
    {
        title: "The Power of Your Subconscious Mind",
        link: "https://t.me/c/2059242652/2299",
        category: "Self Help"
    },
    {
        title: "නොමියෙමි",
        author: "මහගම සේකර",
        link: "https://t.me/c/2059242652/2297",
        category: "Originals"
    },
    {
        title: "Deep Work",
        description: "Rules for Focused Success in a Distracted World",
        link: "https://t.me/c/2059242652/2295",
        category: "Self Help"
    },
    {
        title: "The One Thing",
        link: "https://t.me/c/2059242652/2294",
        category: "Self Help"
    },
    {
        title: "Do It Today: Overcome Procrastination",
        link: "https://t.me/c/2059242652/2293",
        category: "Self Help"
    },
    {
        title: "රෝසි",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2292",
        category: "Originals"
    },
    {
        title: "මැලෝරි ටවර්ස් පාසල - 5",
        link: "https://t.me/c/2059242652/2291",
        category: "Kids"
    },
    {
        title: "මැලෝරි ටවර්ස් පාසල - 4",
        link: "https://t.me/c/2059242652/2290",
        category: "Kids"
    },
    {
        title: "මැලෝරි ටවර්ස් පාසල - 3",
        link: "https://t.me/c/2059242652/2289",
        category: "Kids"
    },
    {
        title: "මැලෝරි ටවර්ස් පාසල - 2",
        link: "https://t.me/c/2059242652/2288",
        category: "Kids"
    },
    {
        title: "මැලෝරි ටවර්ස් පාසල - 1",
        link: "https://t.me/c/2059242652/2287",
        category: "Kids"
    },
    {
        title: "රතිය විදු ඇසින්",
        link: "https://t.me/c/2059242652/2286",
        category: "General"
    },
    {
        title: "කස්තුරි සුවද",
        link: "https://t.me/c/2059242652/2285",
        category: "Originals"
    },
    {
        title: "ID",
        author: "මොහාන් රාජ් මඩවල",
        link: "https://t.me/c/2059242652/2284",
        category: "Originals"
    },
    {
        title: "පමාවෙලා හිරු ඇවිදින්",
        link: "https://t.me/c/2059242652/2282",
        category: "Originals"
    },
    {
        title: "නුවර අහස යට",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2281",
        category: "Originals"
    },
    {
        title: "දයාබර නෝටි 03",
        link: "https://t.me/c/2059242652/2280",
        category: "Kids"
    },
    {
        title: "දයාබර නෝටි 02",
        link: "https://t.me/c/2059242652/2279",
        category: "Kids"
    },
    {
        title: "දයාබර නෝටි 01",
        link: "https://t.me/c/2059242652/2278",
        category: "Kids"
    },
    {
        title: "අයේෂා",
        author: "H. Rider Haggard",
        link: "https://t.me/c/2059242652/2277",
        category: "Translation"
    },
    {
        title: "මරණයේ සෙවනැලි",
        author: "ලසිත රවීන් උමංගලිය",
        link: "https://t.me/c/2059242652/2276",
        category: "Horror"
    },
    {
        title: "මරණ තුනක්",
        description: "Mystery of the three deaths",
        link: "https://t.me/c/2059242652/2275",
        category: "Translation"
    },
    {
        title: "අපූරු ඉස්කෝලේ බිහිසුණු රැයක්",
        link: "https://t.me/c/2059242652/2274",
        category: "Kids"
    },
    {
        title: "අපූරු ඉස්කෝලේ දෙවැනි වාරය",
        link: "https://t.me/c/2059242652/2273",
        category: "Kids"
    },
    {
        title: "හරි අපූරු ඉස්කෝලේ",
        link: "https://t.me/c/2059242652/2272",
        category: "Kids"
    },
    {
        title: "Forget me not මල් කිණිත්තක පුරාවෘත්තය",
        link: "https://t.me/c/2059242652/2270",
        category: "Originals"
    },
    {
        title: "The Hunger Games Trilogy",
        link: "https://t.me/c/2059242652/2267",
        category: "Translation"
    },
    {
        title: "ධනවත් පියා දිලිදු පියා",
        author: "Robert T. Kiyosaki",
        link: "https://t.me/c/2059242652/2266",
        category: "Self Help"
    },
    {
        title: "මේ ලිවුම නොකියවා ගිය අය",
        link: "https://t.me/c/2059242652/2265",
        category: "Originals"
    },
    {
        title: "දෙවැනි ගැහැණිය",
        link: "https://t.me/c/2059242652/2262",
        category: "Originals"
    },
    {
        title: "Velvet ප්‍රේමය (7)",
        link: "https://t.me/c/2059242652/2261",
        category: "Romance"
    },
    {
        title: "හදවත් වරක් 1",
        author: "නිලූකා බ්‍රැන්ඩන්",
        link: "https://t.me/c/2059242652/2258",
        category: "Romance"
    },
    {
        title: "රන්දෝලී",
        author: "චන්දි කොඩිකාර",
        link: "https://t.me/c/2059242652/2257",
        category: "Originals"
    },
    {
        title: "රත් දෙකොපුල්",
        author: "රැවනි ලියන්ගොල්ල",
        link: "https://t.me/c/2059242652/2253",
        category: "Originals"
    },
    {
        title: "භීතියේ කදවුර",
        description: "Goosebumps - R.L.Stine",
        link: "https://t.me/c/2059242652/2251",
        category: "Horror"
    },
    {
        title: "පිය උරුමය",
        description: "Her Father's daughter",
        link: "https://t.me/c/2059242652/2250",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes මැණික් කොල්ලය",
        author: "චන්දන මෙන්ඩිස්",
        link: "https://t.me/c/2059242652/2249",
        category: "Translation"
    },
    {
        title: "වැරදුන දඩයම (Sherlock Holmes 29)",
        link: "https://t.me/c/2059242652/2248",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 28 - ඕලන්ද නෞකාව",
        link: "https://t.me/c/2059242652/2247",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 27 - අද්භූත ආගන්තුකයා",
        link: "https://t.me/c/2059242652/2246",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 26 - හදිසි අනතුර",
        link: "https://t.me/c/2059242652/2245",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 25 - ඊජිප්තු ශාපය",
        link: "https://t.me/c/2059242652/2244",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 23 - රුසියානු ඔත්තුකාරයා",
        link: "https://t.me/c/2059242652/2243",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 22 - භීෂණයක්",
        link: "https://t.me/c/2059242652/2242",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 21 - සමුදුරේ සටන",
        link: "https://t.me/c/2059242652/2241",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 20 - ගින්දර සමඟ සෙල්ලම්",
        link: "https://t.me/c/2059242652/2240",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 19 - අභිරහස් දොස්තර",
        link: "https://t.me/c/2059242652/2239",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 18 - ප්‍රදීපාගාරයේ වික්‍රමය",
        link: "https://t.me/c/2059242652/2238",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 17 - රතුවත හැඩි කතා",
        link: "https://t.me/c/2059242652/2237",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 16 - කලු ව්‍යාඝ්‍රයා",
        link: "https://t.me/c/2059242652/2236",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 15 - භයානක මිනිහා",
        link: "https://t.me/c/2059242652/2235",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 13 - පුද්ගලිකයි රහසිගතයි",
        link: "https://t.me/c/2059242652/2233",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 12 - ආපසු එයි",
        link: "https://t.me/c/2059242652/2232",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 11 - ඔබෙන් සමුගනිමි",
        link: "https://t.me/c/2059242652/2231",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 10 - ලෝහිත පරීක්ෂණය",
        link: "https://t.me/c/2059242652/2230",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 09 - දියමන්ති ඔටුන්න",
        link: "https://t.me/c/2059242652/2229",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 08 - ඉන්ද්‍රනීල මාණික්‍යය",
        link: "https://t.me/c/2059242652/2228",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 07 - මහා රෑ ආ මරයා",
        link: "https://t.me/c/2059242652/2227",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 06 - අන්තරාදායක අඩවියක",
        link: "https://t.me/c/2059242652/2226",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 05 - ලේ සලකුණ",
        link: "https://t.me/c/2059242652/2225",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 04 - මළගිය ඇත්තෝ සාක්කි දෙති",
        link: "https://t.me/c/2059242652/2224",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 03 - බිහිසුණු නිම්නය",
        link: "https://t.me/c/2059242652/2223",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 02 - සිවු රහස් සලකුණ",
        link: "https://t.me/c/2059242652/2222",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes 01",
        link: "https://t.me/c/2059242652/2221",
        category: "Translation"
    },
    {
        title: "Atomic Habits",
        link: "https://t.me/c/2059242652/2219",
        category: "Self Help"
    },
    {
        title: "අමාවක හස",
        link: "https://t.me/c/2059242652/2218",
        category: "Originals"
    },
    {
        title: "අඹ යාලුවෝ 2",
        link: "https://t.me/c/2059242652/2217",
        category: "Kids"
    },
    {
        title: "නිදහසේ අර්ථශාස්ත්‍රය",
        author: "Frederic Bastiat",
        link: "https://t.me/c/2059242652/2216",
        category: "General"
    },
    {
        title: "BLACK IRON",
        author: "දේව් ශ්‍රී",
        link: "https://t.me/c/2059242652/2215",
        category: "Originals"
    },
    {
        title: "කොමියුනිස්ට් වාදයේ කළු පොත",
        link: "https://t.me/c/2059242652/2214",
        category: "History"
    },
    {
        title: "ජාතීන්ගේ ධනය",
        author: "Adam Smith",
        link: "https://t.me/c/2059242652/2213",
        category: "General"
    },
    {
        title: "මම පැන්සල",
        author: "Leonard E. Read",
        link: "https://t.me/c/2059242652/2212",
        category: "General"
    },
    {
        title: "අපි ජිවත් වන්නෝ",
        author: "Ayn Rand",
        link: "https://t.me/c/2059242652/2211",
        category: "Translation"
    },
    {
        title: "පුරාණ සර්ප වෙදපොත",
        link: "https://t.me/c/2059242652/2210",
        category: "Other"
    },
    {
        title: "ජුරාසික් උයනේ බිහිසුනු ගමන",
        link: "https://t.me/c/2059242652/2209",
        category: "Translation"
    },
    {
        title: "අභිරහස් උයන",
        link: "https://t.me/c/2059242652/2208",
        category: "Kids"
    },
    {
        title: "පීටර් සහ දඟකාර මල්ලී",
        link: "https://t.me/c/2059242652/2207",
        category: "Kids"
    },
    {
        title: "අභිරහස් ඔරලෝසුව",
        link: "https://t.me/c/2059242652/2206",
        category: "Kids"
    },
    {
        title: "කුඩ හොරා",
        link: "https://t.me/c/2059242652/2205",
        category: "Kids"
    },
    {
        title: "Nancy Drew භූත දඩයම",
        link: "https://t.me/c/2059242652/2204",
        category: "Translation"
    },
    {
        title: "මීයා සිංහයා",
        link: "https://t.me/c/2059242652/2203",
        category: "Kids"
    },
    {
        title: "පිදුරුපාල",
        link: "https://t.me/c/2059242652/2202",
        category: "Kids"
    },
    {
        title: "ක්‍රිකට් තරගය",
        link: "https://t.me/c/2059242652/2201",
        category: "Kids"
    },
    {
        title: "පියාඹන තොප්පිය",
        link: "https://t.me/c/2059242652/2200",
        category: "Kids"
    },
    {
        title: "දගමල්ල රහසක් රකී",
        link: "https://t.me/c/2059242652/2199",
        category: "Kids"
    },
    {
        title: "ගෙඩි වෙදපොත",
        link: "https://t.me/c/2059242652/2198",
        category: "Other"
    },
    {
        title: "බබා කෙටූ හැටි",
        link: "https://t.me/c/2059242652/2197",
        category: "Kids"
    },
    {
        title: "ඒත් මං ආදරෙයි",
        link: "https://t.me/c/2059242652/2195",
        category: "Romance"
    },
    {
        title: "එළියකන්ද වධ කඳවුර",
        link: "https://t.me/c/2059242652/2191",
        category: "History"
    },
    {
        title: "වස්සාන සිහිනය",
        link: "https://t.me/c/2059242652/2190",
        category: "Originals"
    },
    {
        title: "අඳුරු කැණියම",
        author: "අනුරාදි ගජනායක",
        link: "https://t.me/c/2059242652/2188",
        category: "Originals"
    },
    {
        title: "දියමන්ති නිම්නය",
        author: "පී බී සේනානායක",
        link: "https://t.me/c/2059242652/2187",
        category: "Translation"
    },
    {
        title: "පිස්සෙකුගේ දින පොත",
        link: "https://t.me/c/2059242652/2184",
        category: "Translation"
    },
    {
        title: "යුද්ධය හා අම්මා",
        author: "Nicholas Gage",
        link: "https://t.me/c/2059242652/2182",
        category: "Translation"
    },
    {
        title: "මැටිල්ඩා",
        author: "Roald Dahl",
        link: "https://t.me/c/2059242652/2181",
        category: "Kids"
    },
    {
        title: "ගිරිදේවී",
        author: "ශාන්ති දිසානායක",
        link: "https://t.me/c/2059242652/2180",
        category: "Originals"
    },
    {
        title: "Persona",
        link: "https://t.me/c/2059242652/2179",
        category: "Originals"
    },
    {
        title: "එයා 1st year මං 2nd year",
        author: "රංගන දිල්ෂාන්",
        link: "https://t.me/c/2059242652/2178",
        category: "Romance"
    },
    {
        title: "ඇමසෝනියා",
        link: "https://t.me/c/2059242652/2177",
        category: "Translation"
    },
    {
        title: "ත්‍රිපිටකය: එහි ප්‍රභවය, විකාශනය සහ අවසානය",
        link: "https://t.me/c/2059242652/2175",
        category: "Religion"
    },
    {
        title: "වැස්ස",
        link: "https://t.me/c/2059242652/2174",
        category: "Originals"
    },
    {
        title: "මැණික් නදිය ගලා බසී",
        link: "https://t.me/c/2059242652/2173",
        category: "Originals"
    },
    {
        title: "කුමාරිහාමි",
        link: "https://t.me/c/2059242652/2172",
        category: "Originals"
    },
    {
        title: "(අ)සිහි - කස්තුරි සුවද 02",
        link: "https://t.me/c/2059242652/2167",
        category: "Originals"
    },
    {
        title: "කැමෙලියා",
        author: "විරාජිනි තෙන්නකෝන්",
        link: "https://t.me/c/2059242652/2165",
        category: "Originals"
    },
    {
        title: "බියුරෝ",
        link: "https://t.me/c/2059242652/2164",
        category: "Originals"
    },
    {
        title: "අසනග වැසි",
        link: "https://t.me/c/2059242652/2160",
        category: "Originals"
    },
    {
        title: "කන්දක් සේ මා",
        link: "https://t.me/c/2059242652/2157",
        category: "Originals"
    },
    {
        title: "මාණික්කාවත",
        link: "https://t.me/c/2059242652/2155",
        category: "Originals"
    },
    {
        title: "දඩමංකඩ",
        author: "ශාන්ති දිසානායක",
        link: "https://t.me/c/2059242652/2154",
        category: "Originals"
    },
    {
        title: "12.12.12",
        author: "මංජුල සේනාරත්න",
        link: "https://t.me/c/2059242652/2152",
        category: "Originals"
    },
    {
        title: "බයෝ කරපු ඒ ලෙවල් 2",
        link: "https://t.me/c/2059242652/2150",
        category: "Originals"
    },
    {
        title: "සුළඟ වගේ ඇවිදින්",
        author: "දිනේෂ් කොළඹගේ",
        link: "https://t.me/c/2059242652/2149",
        category: "Originals"
    },
    {
        title: "ලයිලැක්",
        link: "https://t.me/c/2059242652/2148",
        category: "Originals"
    },
    {
        title: "ඇත්තටම අපි ට්‍රැක් පැනපු ගෑනු",
        author: "ශිවන්ති ඩි සිල්වා",
        link: "https://t.me/c/2059242652/2147",
        category: "Poems"
    },
    {
        title: "කොළ පාට ඇස්",
        link: "https://t.me/c/2059242652/2146",
        category: "Romance"
    },
    {
        title: "විසඹසර",
        link: "https://t.me/c/2059242652/2144",
        category: "Originals"
    },
    {
        title: "තාරු 2",
        link: "https://t.me/c/2059242652/2132",
        category: "Originals"
    },
    {
        title: "තාරු 1",
        link: "https://t.me/c/2059242652/2131",
        category: "Originals"
    },
    {
        title: "මොස්තර",
        link: "https://t.me/c/2059242652/2130",
        category: "Originals"
    },
    {
        title: "ඔබ පසළොස්වක",
        link: "https://t.me/c/2059242652/2129",
        category: "Originals"
    },
    {
        title: "නිබ්බුතා",
        link: "https://t.me/c/2059242652/2128",
        category: "Originals"
    },
    {
        title: "සින්දුර් 04",
        link: "https://t.me/c/2059242652/2126",
        category: "Originals"
    },
    {
        title: "සින්දුර් 03",
        link: "https://t.me/c/2059242652/2125",
        category: "Originals"
    },
    {
        title: "සින්දුර් 02",
        link: "https://t.me/c/2059242652/2124",
        category: "Originals"
    },
    {
        title: "සින්දුර් 1",
        link: "https://t.me/c/2059242652/2123",
        category: "Originals"
    },
    {
        title: "බොඳ මීදුම් 02",
        link: "https://t.me/c/2059242652/2122",
        category: "Originals"
    },
    {
        title: "බොඳ මීදුම් 01",
        link: "https://t.me/c/2059242652/2121",
        category: "Originals"
    },
    {
        title: "පාරමී",
        link: "https://t.me/c/2059242652/2120",
        category: "Originals"
    },
    {
        title: "ශ්‍රී 2",
        link: "https://t.me/c/2059242652/2119",
        category: "Originals"
    },
    {
        title: "ශ්‍රී 1",
        link: "https://t.me/c/2059242652/2118",
        category: "Originals"
    },
    {
        title: "ගාලු කුමාරි",
        link: "https://t.me/c/2059242652/2115",
        category: "Originals"
    },
    {
        title: "ආනන්ද රාජ පෙමින් 02",
        link: "https://t.me/c/2059242652/2114",
        category: "Originals"
    },
    {
        title: "ආනන්ද රාජ පෙමින් 01",
        link: "https://t.me/c/2059242652/2113",
        category: "Originals"
    },
    {
        title: "දෙනුවන් 3",
        link: "https://t.me/c/2059242652/2112",
        category: "Originals"
    },
    {
        title: "දෙනුවන් 2",
        link: "https://t.me/c/2059242652/2111",
        category: "Originals"
    },
    {
        title: "දෙනුවන් 1",
        link: "https://t.me/c/2059242652/2110",
        category: "Originals"
    },
    {
        title: "සපූ 5",
        link: "https://t.me/c/2059242652/2109",
        category: "Originals"
    },
    {
        title: "Parami",
        link: "https://t.me/c/2059242652/2108",
        category: "Originals"
    },
    {
        title: "නිම්නා",
        author: "සුජීව ප්‍රසන්නාරච්චි",
        link: "https://t.me/c/2059242652/2107",
        category: "Originals"
    },
    {
        title: "Mosthara",
        link: "https://t.me/c/2059242652/2106",
        category: "Originals"
    },
    {
        title: "මගේ දොස්තර නෝනා",
        link: "https://t.me/c/2059242652/2105",
        category: "Originals"
    },
    {
        title: "කඳු පාර",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2104",
        category: "Originals"
    },
    {
        title: "ආදරය ගින්දරක් 2",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2103",
        category: "Originals"
    },
    {
        title: "පොඩ්ඩා 1",
        link: "https://t.me/c/2059242652/2102",
        category: "Originals"
    },
    {
        title: "පොඩ්ඩා 2",
        link: "https://t.me/c/2059242652/2101",
        category: "Originals"
    },
    {
        title: "පොලියානා 03: ජිම් සහ පොලියානා",
        link: "https://t.me/c/2059242652/2095",
        category: "Translation"
    },
    {
        title: "සතුට බෙදන පොලියානා",
        link: "https://t.me/c/2059242652/2094",
        category: "Translation"
    },
    {
        title: "Poliyana",
        link: "https://t.me/c/2059242652/2093",
        category: "Translation"
    },
    {
        title: "මහව කෝච්චිය 2",
        link: "https://t.me/c/2059242652/2091",
        category: "Originals"
    },
    {
        title: "මහව කෝච්චිය 1",
        link: "https://t.me/c/2059242652/2090",
        category: "Originals"
    },
    {
        title: "බෝදිලිමා",
        author: "මොහාන් රාජ් මඩවල",
        link: "https://t.me/c/2059242652/2089",
        category: "Originals"
    },
    {
        title: "සපූ 06",
        link: "https://t.me/c/2059242652/2088",
        category: "Originals"
    },
    {
        title: "සපූ 05",
        link: "https://t.me/c/2059242652/2087",
        category: "Originals"
    },
    {
        title: "සපූ 04",
        link: "https://t.me/c/2059242652/2086",
        category: "Originals"
    },
    {
        title: "සපූ 03",
        link: "https://t.me/c/2059242652/2085",
        category: "Originals"
    },
    {
        title: "සපූ 02",
        link: "https://t.me/c/2059242652/2084",
        category: "Originals"
    },
    {
        title: "සපූ 01",
        link: "https://t.me/c/2059242652/2083",
        category: "Originals"
    },
    {
        title: "ඇස් පියන් යට",
        author: "ගංගා ශයිනි ගමගේ",
        link: "https://t.me/c/2059242652/2082",
        category: "Originals"
    },
    {
        title: "ඇස් දෙක",
        author: "සෝමපාල රණතුංග",
        link: "https://t.me/c/2059242652/2081",
        category: "Originals"
    },
    {
        title: "අපේ කතාව",
        link: "https://t.me/c/2059242652/2080",
        category: "Originals"
    },
    {
        title: "ආදරණීය වික්ටෝරියා",
        link: "https://t.me/c/2059242652/2079",
        category: "Originals"
    },
    {
        title: "ආදරණීය බෙකම්",
        link: "https://t.me/c/2059242652/2078",
        category: "Originals"
    },
    {
        title: "ආදරය බලා හිඳී",
        link: "https://t.me/c/2059242652/2077",
        category: "Originals"
    },
    {
        title: "වස්සාන ගීතිකා",
        link: "https://t.me/c/2059242652/2076",
        category: "Originals"
    },
    {
        title: "විරාජිනී 2",
        link: "https://t.me/c/2059242652/2075",
        category: "Originals"
    },
    {
        title: "විරාජිනී 1",
        link: "https://t.me/c/2059242652/2074",
        category: "Originals"
    },
    {
        title: "රතු රෝස",
        link: "https://t.me/c/2059242652/2073",
        category: "Originals"
    },
    {
        title: "ගඟ අද්දර කැලේ",
        link: "https://t.me/c/2059242652/2068",
        category: "Originals"
    },
    {
        title: "දූලි",
        author: "ගයානා එස් ලක්මාලි",
        link: "https://t.me/c/2059242652/2065",
        category: "Originals"
    },
    {
        title: "සෙත්",
        author: "ගයානා එස් ලක්මාලි",
        link: "https://t.me/c/2059242652/2064",
        category: "Originals"
    },
    {
        title: "අවකාශ",
        link: "https://t.me/c/2059242652/2063",
        category: "Originals"
    },
    {
        title: "Bhavi",
        author: "Gayana S Lakmali",
        link: "https://t.me/c/2059242652/2062",
        category: "Originals"
    },
    {
        title: "මගුල් කෑම",
        link: "https://t.me/c/2059242652/2060",
        category: "Kids"
    },
    {
        title: "හීන් සැරය",
        link: "https://t.me/c/2059242652/2058",
        category: "Originals"
    },
    {
        title: "මේ මිහිරැති සොඳුරු සමය (Little House 8)",
        link: "https://t.me/c/2059242652/2056",
        category: "Kids"
    },
    {
        title: "සීතලෙන් සීත වුණු සීත සමය (Little House 6)",
        link: "https://t.me/c/2059242652/2055",
        category: "Kids"
    },
    {
        title: "රිදී විල් තෙර (Little House 5)",
        link: "https://t.me/c/2059242652/2054",
        category: "Kids"
    },
    {
        title: "තැනිතලාවේ පිහිටි කුඩා නගරය (Little House 7)",
        link: "https://t.me/c/2059242652/2053",
        category: "Kids"
    },
    {
        title: "තැනිතලාවේ පිහිටි කුඩා නිවස (Little House 2)",
        link: "https://t.me/c/2059242652/2052",
        category: "Kids"
    },
    {
        title: "වන අරණක කුඩා නිවස (Little House 1)",
        link: "https://t.me/c/2059242652/2051",
        category: "Kids"
    },
    {
        title: "ඉරණම උර ගෑ මිනිසු",
        link: "https://t.me/c/2059242652/2049",
        category: "Originals"
    },
    {
        title: "සමනල වසන්තය",
        link: "https://t.me/c/2059242652/2048",
        category: "Originals"
    },
    {
        title: "නුරා සිත්තරාවි",
        author: "ගිම්හානි වාසනා",
        link: "https://t.me/c/2059242652/2046",
        category: "Romance"
    },
    {
        title: "යටිසිත",
        link: "https://t.me/c/2059242652/2044",
        category: "Self Help"
    },
    {
        title: "ඩාවින්චි කේතය",
        link: "https://t.me/c/2059242652/2043",
        category: "Translation"
    },
    {
        title: "ඇත්තක අරුමය",
        link: "https://t.me/c/2059242652/2042",
        category: "Originals"
    },
    {
        title: "නෙප්චූන් ගේ පුත්‍රයා",
        description: "The Heroes of Olympus: The Son of Neptune",
        link: "https://t.me/c/2059242652/2041",
        category: "Translation"
    },
    {
        title: "ද්විත්වය",
        description: "Duality",
        author: "සිරි සමන්තභද්‍ර",
        link: "https://t.me/c/2059242652/2040",
        category: "Religion"
    },
    {
        title: "2061",
        author: "Arthur C Clarke",
        link: "https://t.me/c/2059242652/2039",
        category: "Science Fiction"
    },
    {
        title: "2010",
        author: "Arthur C Clarke",
        link: "https://t.me/c/2059242652/2037",
        category: "Science Fiction"
    },
    {
        title: "ලෝක විනාශය 2012",
        author: "Arthur C Clarke",
        link: "https://t.me/c/2059242652/2036",
        category: "Science Fiction"
    },
    {
        title: "රාමා",
        author: "Arthur C Clarke",
        link: "https://t.me/c/2059242652/2035",
        category: "Science Fiction"
    },
    {
        title: "මිහිකතේ ගීතය",
        author: "Arthur C Clarke",
        link: "https://t.me/c/2059242652/2034",
        category: "Science Fiction"
    },
    {
        title: "2001: A Space Odyssey",
        author: "Arthur C Clarke",
        link: "https://t.me/c/2059242652/2033",
        category: "Science Fiction"
    },
    {
        title: "මන්දාකිණියේ තත්පරයක්",
        author: "Arthur C Clarke",
        link: "https://t.me/c/2059242652/2032",
        category: "Science Fiction"
    },
    {
        title: "ඉර හඳ නැඟි රට",
        link: "https://t.me/c/2059242652/2030",
        category: "Originals"
    },
    {
        title: "මහාවංශය",
        link: "https://t.me/c/2059242652/2029",
        category: "History"
    },
    {
        title: "සීගිරි අවසානය",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2026",
        category: "Originals"
    },
    {
        title: "සීගිරි 3",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2025",
        category: "Originals"
    },
    {
        title: "සීගිරි 2",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2024",
        category: "Originals"
    },
    {
        title: "සීගිරි 1",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2023",
        category: "Originals"
    },
    {
        title: "නරි බෑනා",
        link: "https://t.me/c/2059242652/2022",
        category: "Kids"
    },
    {
        title: "මනමේ නාටකය",
        author: "එදිරිවීර සරච්චන්ද්‍ර",
        link: "https://t.me/c/2059242652/2021",
        category: "Originals"
    },
    {
        title: "Harry Potter 8",
        link: "https://t.me/c/2059242652/2020",
        category: "Translation"
    },
    {
        title: "Harry Potter 7",
        link: "https://t.me/c/2059242652/2019",
        category: "Translation"
    },
    {
        title: "Harry Potter 6",
        link: "https://t.me/c/2059242652/2018",
        category: "Translation"
    },
    {
        title: "Harry Potter 5",
        link: "https://t.me/c/2059242652/2017",
        category: "Translation"
    },
    {
        title: "Harry Potter 4",
        link: "https://t.me/c/2059242652/2016",
        category: "Translation"
    },
    {
        title: "Harry Potter 3",
        link: "https://t.me/c/2059242652/2015",
        category: "Translation"
    },
    {
        title: "Harry Potter 2",
        link: "https://t.me/c/2059242652/2014",
        category: "Translation"
    },
    {
        title: "Harry Potter 1",
        link: "https://t.me/c/2059242652/2013",
        category: "Translation"
    },
    {
        title: "පොලියානා 1",
        link: "https://t.me/c/2059242652/2012",
        category: "Translation"
    },
    {
        title: "පොලියානා 3: ජිම් සහ පොලියානා",
        link: "https://t.me/c/2059242652/2010",
        category: "Translation"
    },
    {
        title: "මළගිය ඇත්තෝ",
        author: "එදිරිවීර සරච්චන්ද්‍ර",
        link: "https://t.me/c/2059242652/2009",
        category: "Originals"
    },
    {
        title: "දෝතක් මල්",
        link: "https://t.me/c/2059242652/2006",
        category: "Originals"
    },
    {
        title: "රන්තරු",
        link: "https://t.me/c/2059242652/2004",
        category: "Originals"
    },
    {
        title: "දෙනෙත්",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2003",
        category: "Originals"
    },
    {
        title: "බක්කරේ 1",
        link: "https://t.me/c/2059242652/2001",
        category: "Originals"
    },
    {
        title: "ඉරට්ටේ",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/2000",
        category: "Originals"
    },
    {
        title: "බක්කරේ 2",
        link: "https://t.me/c/2059242652/1999",
        category: "Originals"
    },
    {
        title: "බක්කරේ 3",
        link: "https://t.me/c/2059242652/1998",
        category: "Originals"
    },
    {
        title: "බක්කරේ 4",
        link: "https://t.me/c/2059242652/1997",
        category: "Originals"
    },
    {
        title: "බක්කරේ 5",
        link: "https://t.me/c/2059242652/1996",
        category: "Originals"
    },
    {
        title: "දේදුනු",
        link: "https://t.me/c/2059242652/1995",
        category: "Originals"
    },
    {
        title: "සුදු අක්කා 03",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1993",
        category: "Originals"
    },
    {
        title: "සුදු අක්කා 02",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1992",
        category: "Originals"
    },
    {
        title: "සුදු අක්කා 01",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1991",
        category: "Originals"
    },
    {
        title: "වර්ශා 13",
        link: "https://t.me/c/2059242652/1990",
        category: "Originals"
    },
    {
        title: "වර්ශා 12",
        link: "https://t.me/c/2059242652/1989",
        category: "Originals"
    },
    {
        title: "වර්ශා 14",
        link: "https://t.me/c/2059242652/1988",
        category: "Originals"
    },
    {
        title: "වර්ශා 15",
        link: "https://t.me/c/2059242652/1987",
        category: "Originals"
    },
    {
        title: "වර්ශා 10",
        link: "https://t.me/c/2059242652/1986",
        category: "Originals"
    },
    {
        title: "වර්ශා 09",
        link: "https://t.me/c/2059242652/1985",
        category: "Originals"
    },
    {
        title: "වර්ශා 11",
        link: "https://t.me/c/2059242652/1984",
        category: "Originals"
    },
    {
        title: "වර්ශා 06",
        link: "https://t.me/c/2059242652/1983",
        category: "Originals"
    },
    {
        title: "වර්ශා 08",
        link: "https://t.me/c/2059242652/1982",
        category: "Originals"
    },
    {
        title: "වර්ශා 07",
        link: "https://t.me/c/2059242652/1981",
        category: "Originals"
    },
    {
        title: "වර්ශා 03",
        link: "https://t.me/c/2059242652/1980",
        category: "Originals"
    },
    {
        title: "වර්ශා 05",
        link: "https://t.me/c/2059242652/1979",
        category: "Originals"
    },
    {
        title: "වර්ශා 04",
        link: "https://t.me/c/2059242652/1978",
        category: "Originals"
    },
    {
        title: "වර්ශා 02",
        link: "https://t.me/c/2059242652/1977",
        category: "Originals"
    },
    {
        title: "වර්ශා 01",
        link: "https://t.me/c/2059242652/1976",
        category: "Originals"
    },
    {
        title: "උතුම් පැතුම් 02",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1975",
        category: "Originals"
    },
    {
        title: "උතුම් පැතුම් 03",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1974",
        category: "Originals"
    },
    {
        title: "උතුම් පැතුම් 04",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1973",
        category: "Originals"
    },
    {
        title: "උතුම් පැතුම් 05",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1972",
        category: "Originals"
    },
    {
        title: "උතුම් පැතුම් 06",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1971",
        category: "Originals"
    },
    {
        title: "උතුම් පැතුම් 07",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1970",
        category: "Originals"
    },
    {
        title: "උතුම් පැතුම් 01",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1969",
        category: "Originals"
    },
    {
        title: "තාරු 3",
        link: "https://t.me/c/2059242652/1968",
        category: "Originals"
    },
    {
        title: "රාධා",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1967",
        category: "Originals"
    },
    {
        title: "එත් මං ආදරෙයි",
        author: "අබ්දුල් උමර් සහන් නෙත්මිණ",
        link: "https://t.me/c/2059242652/1965",
        category: "Romance"
    },
    {
        title: "Velvet ප්‍රේමය (7)",
        link: "https://t.me/c/2059242652/1961",
        category: "Romance"
    },
    {
        title: "සසර අනන්තෙක",
        link: "https://t.me/c/2059242652/1959",
        category: "Originals"
    },
    {
        title: "වර්ෂා 7",
        link: "https://t.me/c/2059242652/1957",
        category: "Originals"
    },
    {
        title: "බත්තලංගුණ්ඩුව",
        link: "https://t.me/c/2059242652/1955",
        category: "Originals"
    },
    {
        title: "සැබෑ මිනිසෙකුගේ කතාව",
        link: "https://t.me/c/2059242652/1954",
        category: "Translation"
    },
    {
        title: "නපුරු පෙමක්",
        author: "Amaya Siriwardhana",
        link: "https://t.me/c/2059242652/1952",
        category: "Romance"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        link: "https://t.me/c/2059242652/1950",
        category: "Translation"
    },
    {
        title: "රාජාවලිය",
        link: "https://t.me/c/2059242652/1949",
        category: "History"
    },
    {
        title: "කඳුලක කැලලක් 01",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1947",
        category: "Originals"
    },
    {
        title: "Velvet ප්‍රේමය (2)",
        link: "https://t.me/c/2059242652/1946",
        category: "Romance"
    },
    {
        title: "නාමල් ආයේ පිපුනාවේ",
        link: "https://t.me/c/2059242652/1944",
        category: "Originals"
    },
    {
        title: "Red Wine",
        link: "https://t.me/c/2059242652/1939",
        category: "Originals"
    },
    {
        title: "සසර සර 02",
        author: "රමණි බුලත්සිංහල",
        link: "https://t.me/c/2059242652/1938",
        category: "Originals"
    },
    {
        title: "සසර සර 01",
        author: "රමණි බුලත්සිංහල",
        link: "https://t.me/c/2059242652/1937",
        category: "Originals"
    },
    {
        title: "බලු හදවත",
        link: "https://t.me/c/2059242652/1936",
        category: "Translation"
    },
    {
        title: "ඒ මගේ මලයි 3",
        link: "https://t.me/c/2059242652/1933",
        category: "Romance"
    },
    {
        title: "ඒ මගේ මලයි 4",
        link: "https://t.me/c/2059242652/1932",
        category: "Romance"
    },
    {
        title: "ත්‍රිත්ව",
        author: "මුතුමුදලිගේ නිශ්ශංක",
        link: "https://t.me/c/2059242652/1931",
        category: "Originals"
    },
    {
        title: "හයිඩි",
        link: "https://t.me/c/2059242652/1930",
        category: "Kids"
    },
    {
        title: "ශාමා",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1929",
        category: "Originals"
    },
    {
        title: "පුංචි කතාවක්",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1928",
        category: "Originals"
    },
    {
        title: "සුපෙම් සදක් පායලා",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1927",
        category: "Originals"
    },
    {
        title: "පූජනීයයි ආදරේ",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1926",
        category: "Originals"
    },
    {
        title: "පූජා වේවා",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1925",
        category: "Originals"
    },
    {
        title: "ආදරයේ වියරු ගිනිදැල්",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1924",
        category: "Originals"
    },
    {
        title: "ආදරණීය පුංචි කතාවක්",
        link: "https://t.me/c/2059242652/1922",
        category: "Originals"
    },
    {
        title: "අපේම වී අප ඉපදේවා",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1921",
        category: "Originals"
    },
    {
        title: "මල් මිටියාවත",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1920",
        category: "Originals"
    },
    {
        title: "ආදරය ගින්දරක්",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1919",
        category: "Originals"
    },
    {
        title: "පෙම්බර මධූ part 01",
        link: "https://t.me/c/2059242652/1918",
        category: "Originals"
    },
    {
        title: "චේතනා",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1917",
        category: "Originals"
    },
    {
        title: "054 -- Final",
        link: "https://t.me/c/2059242652/1912",
        category: "Other"
    },
    {
        title: "053 - 2013-07-28",
        link: "https://t.me/c/2059242652/1911",
        category: "Other"
    },
    {
        title: "021",
        link: "https://t.me/c/2059242652/1910",
        category: "Other"
    },
    {
        title: "මොන්ටි ක්‍රිස්ටෝ 6",
        link: "https://t.me/c/2059242652/1909",
        category: "Translation"
    },
    {
        title: "සොඳුරු නවෝදය",
        link: "https://t.me/c/2059242652/1908",
        category: "Originals"
    },
    {
        title: "මොන්ටි ක්‍රිස්ටෝ 5",
        link: "https://t.me/c/2059242652/1907",
        category: "Translation"
    },
    {
        title: "මොන්ටි ක්‍රිස්ටෝ 4",
        link: "https://t.me/c/2059242652/1906",
        category: "Translation"
    },
    {
        title: "මොන්ටි ක්‍රිස්ටෝ 1",
        link: "https://t.me/c/2059242652/1905",
        category: "Translation"
    },
    {
        title: "මොන්ටි ක්‍රිස්ටෝ 3",
        link: "https://t.me/c/2059242652/1904",
        category: "Translation"
    },
    {
        title: "මොන්ටි ක්‍රිස්ටෝ 2",
        link: "https://t.me/c/2059242652/1903",
        category: "Translation"
    },
    {
        title: "අද්භූත බෝනික්කාගේ වියරුව",
        author: "උපුල් වීරවර්ධන",
        link: "https://t.me/c/2059242652/1898",
        category: "Horror"
    },
    {
        title: "තුන්මං හන්දිය",
        author: "මහගම සේකර",
        link: "https://t.me/c/2059242652/1897",
        category: "Originals"
    },
    {
        title: "Guru Geethaya",
        link: "https://t.me/c/2059242652/1896",
        category: "Translation"
    },
    {
        title: "ඡායා 3",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1895",
        category: "Originals"
    },
    {
        title: "ඡායා 1 & 2",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1894",
        category: "Originals"
    },
    {
        title: "නිල් කටරොලු 03",
        author: "තරංගා දිසානායක",
        link: "https://t.me/c/2059242652/1893",
        category: "Originals"
    },
    {
        title: "නිල් කටරොලු 02",
        author: "තරංගා දිසානායක",
        link: "https://t.me/c/2059242652/1892",
        category: "Originals"
    },
    {
        title: "නිල් කටරොලු 1",
        author: "තරංගා දිසානායක",
        link: "https://t.me/c/2059242652/1891",
        category: "Originals"
    },
    {
        title: "හීන හතක් 1",
        link: "https://t.me/c/2059242652/1890",
        category: "Originals"
    },
    {
        title: "මොසාඩ්",
        link: "https://t.me/c/2059242652/1888",
        category: "General"
    },
    {
        title: "CamScanner 05-03-2024 15.48",
        link: "https://t.me/c/2059242652/1885",
        category: "Other"
    },
    {
        title: "හීන හතක් 2",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1883",
        category: "Originals"
    },
    {
        title: "මෙහෙන්දි 2",
        link: "https://t.me/c/2059242652/1879",
        category: "Originals"
    },
    {
        title: "මෙහෙන්දි 1",
        link: "https://t.me/c/2059242652/1878",
        category: "Originals"
    },
    {
        title: "මාවතේ ගීතය",
        link: "https://t.me/c/2059242652/1876",
        category: "Originals"
    },
    {
        title: "අම්මා",
        author: "මැක්සිම් ගෝර්කි",
        link: "https://t.me/c/2059242652/1871",
        category: "Translation"
    },
    {
        title: "Pet Sematary",
        author: "Stephen King",
        link: "https://t.me/c/2059242652/1869",
        category: "Horror"
    },
    {
        title: "Famous Five අත්භූත දුම්රියක්",
        description: "Five Go Off To Camp",
        link: "https://t.me/c/2059242652/1868",
        category: "Kids"
    },
    {
        title: "Famous Five අභිරහස් මන්දිරය",
        description: "The Mystery Of The Hidden House",
        link: "https://t.me/c/2059242652/1867",
        category: "Kids"
    },
    {
        title: "Prana",
        link: "https://t.me/c/2059242652/1865",
        category: "Originals"
    },
    {
        title: "ධවල සියපත්",
        link: "https://t.me/c/2059242652/1864",
        category: "Originals"
    },
    {
        title: "හිතුවක්කාර කිරිල්ලි",
        author: "මුදිතා වට්ටච්චි",
        link: "https://t.me/c/2059242652/1863",
        category: "Originals"
    },
    {
        title: "ජේන් අයර්",
        author: "Charlotte Brontë",
        link: "https://t.me/c/2059242652/1862",
        category: "Translation"
    },
    {
        title: "මධු යාමයේ සිහිනය 2",
        link: "https://t.me/c/2059242652/1860",
        category: "Originals"
    },
    {
        title: "පෙම් සිහිනේ සේයාවී",
        author: "රංගන දිල්ෂාන්",
        link: "https://t.me/c/2059242652/1859",
        category: "Romance"
    },
    {
        title: "හිතුවක්කාර නපුරා",
        author: "කිවිදි පෙරේරා",
        link: "https://t.me/c/2059242652/1858",
        category: "Romance"
    },
    {
        title: "මා නුඹෙමද",
        author: "අසෙනි වර්ෂා",
        link: "https://t.me/c/2059242652/1857",
        category: "Romance"
    },
    {
        title: "මුදියන්සේ මාමා",
        link: "https://t.me/c/2059242652/1856",
        category: "Originals"
    },
    {
        title: "රන්මුසු වැස්ස 2",
        link: "https://t.me/c/2059242652/1854",
        category: "Originals"
    },
    {
        title: "පාට පිරුවට 2",
        link: "https://t.me/c/2059242652/1853",
        category: "Originals"
    },
    {
        title: "තුඹසක විලාපය",
        author: "උපුල් ශාන්ත සන්නස්ගල",
        link: "https://t.me/c/2059242652/1852",
        category: "Originals"
    },
    {
        title: "අපේ ආදර කතාව",
        link: "https://t.me/c/2059242652/1851",
        category: "Originals"
    },
    {
        title: "පිරිමි ගොඩයි මං විතරයි",
        link: "https://t.me/c/2059242652/1850",
        category: "Originals"
    },
    {
        title: "Uthum Pathum 07",
        link: "https://t.me/c/2059242652/1849",
        category: "Originals"
    },
    {
        title: "Uthum Pathum 06",
        link: "https://t.me/c/2059242652/1848",
        category: "Originals"
    },
    {
        title: "Uthum Pathum 05",
        link: "https://t.me/c/2059242652/1847",
        category: "Originals"
    },
    {
        title: "Uthum Pathum 04",
        link: "https://t.me/c/2059242652/1846",
        category: "Originals"
    },
    {
        title: "Uthum Pathum 03",
        link: "https://t.me/c/2059242652/1845",
        category: "Originals"
    },
    {
        title: "Uthum Pathum 02",
        link: "https://t.me/c/2059242652/1844",
        category: "Originals"
    },
    {
        title: "Uthum Pathum 01",
        link: "https://t.me/c/2059242652/1843",
        category: "Originals"
    },
    {
        title: "නිදිකුම්බා මල්",
        link: "https://t.me/c/2059242652/1839",
        category: "Originals"
    },
    {
        title: "අපේ ගමේ විත්ති",
        author: "පියසේන කහඳගමගේ",
        link: "https://t.me/c/2059242652/1838",
        category: "Originals"
    },
    {
        title: "දුක දැරුවා නම් ඒ යශෝධරා",
        link: "https://t.me/c/2059242652/1837",
        category: "Religion"
    },
    {
        title: "අන්තිම කැමැත්ත සහ තවත් අද්භූත කතා",
        link: "https://t.me/c/2059242652/1836",
        category: "Short Stories"
    },
    {
        title: "අද්භූත මනමාලි",
        link: "https://t.me/c/2059242652/1835",
        category: "Horror"
    },
    {
        title: "සිහිනයක රැඳි රහසක්",
        link: "https://t.me/c/2059242652/1834",
        category: "Originals"
    },
    {
        title: "රිදී මකුළුවාගේ අභිරහස",
        link: "https://t.me/c/2059242652/1833",
        category: "Translation"
    },
    {
        title: "අත්භූත ආක්‍රමණිකයෝ",
        link: "https://t.me/c/2059242652/1832",
        category: "Science Fiction"
    },
    {
        title: "කලු සපත්තු",
        link: "https://t.me/c/2059242652/1831",
        category: "Short Stories"
    },
    {
        title: "හැත්තෑ ලක්ශයෙන් එකෙක්",
        link: "https://t.me/c/2059242652/1830",
        category: "Originals"
    },
    {
        title: "වෙසක් පහන",
        link: "https://t.me/c/2059242652/1829",
        category: "Short Stories"
    },
    {
        title: "මිනිස් වටය",
        link: "https://t.me/c/2059242652/1828",
        category: "Short Stories"
    },
    {
        title: "නංගී",
        link: "https://t.me/c/2059242652/1827",
        category: "Short Stories"
    },
    {
        title: "කරත්තය",
        link: "https://t.me/c/2059242652/1826",
        category: "Short Stories"
    },
    {
        title: "කපිතාන්ගේ පුත්තු",
        link: "https://t.me/c/2059242652/1825",
        category: "Translation"
    },
    {
        title: "අකුරට යන වෙලාවේ",
        link: "https://t.me/c/2059242652/1824",
        category: "Short Stories"
    },
    {
        title: "නොනිම් සිත්තම",
        link: "https://t.me/c/2059242652/1822",
        category: "Originals"
    },
    {
        title: "වහල්ලු (කෙටිකතා විමසුම)",
        link: "https://t.me/c/2059242652/1821",
        category: "Short Stories"
    },
    {
        title: "දිසොන්චිනා හාමි",
        link: "https://t.me/c/2059242652/1820",
        category: "Originals"
    },
    {
        title: "කන්ඨාභරණ 1",
        link: "https://t.me/c/2059242652/1819",
        category: "Originals"
    },
    {
        title: "කන්ඨාභරණ 2",
        link: "https://t.me/c/2059242652/1818",
        category: "Originals"
    },
    {
        title: "කඩුපුල් 01",
        link: "https://t.me/c/2059242652/1817",
        category: "Originals"
    },
    {
        title: "කඩුපුල් 02",
        link: "https://t.me/c/2059242652/1816",
        category: "Originals"
    },
    {
        title: "පුනරුදය",
        link: "https://t.me/c/2059242652/1815",
        category: "Originals"
    },
    {
        title: "පුනරුදය 2",
        link: "https://t.me/c/2059242652/1814",
        category: "Originals"
    },
    {
        title: "පුනරුදය 3",
        link: "https://t.me/c/2059242652/1813",
        category: "Originals"
    },
    {
        title: "පුනරුක්ති",
        link: "https://t.me/c/2059242652/1812",
        category: "Originals"
    },
    {
        title: "ලස්සන දවසක්",
        link: "https://t.me/c/2059242652/1811",
        category: "Originals"
    },
    {
        title: "සෙබලියකගේ දූත ගමන",
        link: "https://t.me/c/2059242652/1810",
        category: "Originals"
    },
    {
        title: "දඬු කඩේ ගින්නරී",
        link: "https://t.me/c/2059242652/1809",
        category: "Originals"
    },
    {
        title: "රිදී පියාපත්",
        link: "https://t.me/c/2059242652/1808",
        category: "Originals"
    },
    {
        title: "සඳ හාදු 01",
        link: "https://t.me/c/2059242652/1807",
        category: "Originals"
    },
    {
        title: "සඳ හාදු 02",
        link: "https://t.me/c/2059242652/1806",
        category: "Originals"
    },
    {
        title: "සත්තයි ආදරෙයි",
        link: "https://t.me/c/2059242652/1805",
        category: "Originals"
    },
    {
        title: "මල් වැසි වැටුනාවේ",
        link: "https://t.me/c/2059242652/1804",
        category: "Originals"
    },
    {
        title: "හීනයක් වාගේ",
        link: "https://t.me/c/2059242652/1803",
        category: "Originals"
    },
    {
        title: "ඔබ සිනාසුනා පමණයි",
        link: "https://t.me/c/2059242652/1802",
        category: "Originals"
    },
    {
        title: "ඉතින් අවසරයි",
        link: "https://t.me/c/2059242652/1800",
        category: "Originals"
    },
    {
        title: "තියුණු අසිපතක සෙවන යට",
        author: "තමිලිනී ජෙයකුමාරන්",
        link: "https://t.me/c/2059242652/1799",
        category: "Originals"
    },
    {
        title: "පාට පාට ආදරේ",
        link: "https://t.me/c/2059242652/1797",
        category: "Originals"
    },
    {
        title: "කල්ලන්දූවේ මුතු කොල්ලය",
        link: "https://t.me/c/2059242652/1796",
        category: "Translation"
    },
    {
        title: "මරණයේ සෙවනැල්ල",
        link: "https://t.me/c/2059242652/1795",
        category: "Horror"
    },
    {
        title: "ජනාධිපති තාත්තා",
        author: "චතුරිකා සිරිසේන",
        link: "https://t.me/c/2059242652/1793",
        category: "Originals"
    },
    {
        title: "පලමු සිව් වසර (Little House 9)",
        link: "https://t.me/c/2059242652/1792",
        category: "Kids"
    },
    {
        title: "ගුරු තරුව ඔබයි (To Sir With Love)",
        link: "https://t.me/c/2059242652/1791",
        category: "Translation"
    },
    {
        title: "සැබෑ මිනිසෙකුගේ කතාවක්",
        link: "https://t.me/c/2059242652/1790",
        category: "Translation"
    },
    {
        title: "Faculty of Sex",
        author: "චින්තන ධර්මදාස",
        link: "https://t.me/c/2059242652/1789",
        category: "General"
    },
    {
        title: "Three Investigators - සින්දු කියන සර්පයා",
        link: "https://t.me/c/2059242652/1788",
        category: "Translation"
    },
    {
        title: "ඇමිතිවිල",
        link: "https://t.me/c/2059242652/1787",
        category: "Originals"
    },
    {
        title: "අපූගේ ලෝකය",
        link: "https://t.me/c/2059242652/1786",
        category: "Translation"
    },
    {
        title: "අපොයියාව",
        link: "https://t.me/c/2059242652/1785",
        category: "Originals"
    },
    {
        title: "වළාවක් සේ",
        link: "https://t.me/c/2059242652/1782",
        category: "Originals"
    },
    {
        title: "සුවඳක් වාගේ ආදරේ",
        link: "https://t.me/c/2059242652/1781",
        category: "Originals"
    },
    {
        title: "ක්‍රියාපද",
        link: "https://t.me/c/2059242652/1779",
        category: "Tutorials"
    },
    {
        title: "සමාස - සිංහල ව්‍යාකරණ",
        link: "https://t.me/c/2059242652/1778",
        category: "Tutorials"
    },
    {
        title: "සන්ධි - සිංහල ව්‍යාකරණ",
        link: "https://t.me/c/2059242652/1777",
        category: "Tutorials"
    },
    {
        title: "වාක්‍ය රීති",
        link: "https://t.me/c/2059242652/1776",
        category: "Tutorials"
    },
    {
        title: "තත්සම තද්භව හා නිෂ්පන්න",
        link: "https://t.me/c/2059242652/1775",
        category: "Tutorials"
    },
    {
        title: "තත්භව තත්සම නිශ්පන්න",
        author: "අමිල නුවන් කුමාරතුංග",
        link: "https://t.me/c/2059242652/1774",
        category: "Tutorials"
    },
    {
        title: "තත්සම - තත්භව",
        link: "https://t.me/c/2059242652/1773",
        category: "Tutorials"
    },
    {
        title: "කෘදන්ත",
        link: "https://t.me/c/2059242652/1772",
        category: "Tutorials"
    },
    {
        title: "කර්ම කාරක වාක්‍ය",
        link: "https://t.me/c/2059242652/1771",
        category: "Tutorials"
    },
    {
        title: "අව්‍ය පද",
        link: "https://t.me/c/2059242652/1770",
        category: "Tutorials"
    },
    {
        title: "අක්ෂර වින්‍යාසය",
        link: "https://t.me/c/2059242652/1769",
        category: "Tutorials"
    },
    {
        title: "අක්ෂර මාලාව",
        link: "https://t.me/c/2059242652/1768",
        category: "Tutorials"
    },
    {
        title: "විභක්ති",
        link: "https://t.me/c/2059242652/1767",
        category: "Tutorials"
    },
    {
        title: "අතීතයට ගිය ඇලන්",
        link: "https://t.me/c/2059242652/1765",
        category: "Translation"
    },
    {
        title: "අසුකෝ ගෝත්‍රික පිලිමය",
        link: "https://t.me/c/2059242652/1764",
        category: "Translation"
    },
    {
        title: "ඇලන් සහ දිව්‍ය පුෂ්පය",
        link: "https://t.me/c/2059242652/1763",
        category: "Translation"
    },
    {
        title: "දඩයක්කාර ක්වාටර්මන්",
        link: "https://t.me/c/2059242652/1762",
        category: "Translation"
    },
    {
        title: "ඇලන් ක්වාටර්මන් වීර චාරිකා",
        link: "https://t.me/c/2059242652/1761",
        category: "Translation"
    },
    {
        title: "සාපලත් බෝනික්කා 1 චකීගේ වියරුව",
        link: "https://t.me/c/2059242652/1760",
        category: "Horror"
    },
    {
        title: "සාපලත් බෝනික්කා 2 - චකී",
        link: "https://t.me/c/2059242652/1759",
        category: "Horror"
    },
    {
        title: "මරණයෙන් පිබිදුණු සුන්දරිය",
        link: "https://t.me/c/2059242652/1758",
        category: "Horror"
    },
    {
        title: "කොක්ලෙ මහත්මිය ගේ පූසා",
        link: "https://t.me/c/2059242652/1757",
        category: "Kids"
    },
    {
        title: "තුන් ගුලියෝ",
        link: "https://t.me/c/2059242652/1756",
        category: "Kids"
    },
    {
        title: "වනන්තරේ වික්‍රමය",
        link: "https://t.me/c/2059242652/1755",
        category: "Kids"
    },
    {
        title: "අපේ ඉස්කෝලේ කේක් සංග්‍රාමය",
        link: "https://t.me/c/2059242652/1754",
        category: "Kids"
    },
    {
        title: "හපනා",
        link: "https://t.me/c/2059242652/1753",
        category: "Kids"
    },
    {
        title: "බය නොදත් තරුණයා",
        link: "https://t.me/c/2059242652/1752",
        category: "Kids"
    },
    {
        title: "පසළොස්වක අටවක වු හැටි",
        link: "https://t.me/c/2059242652/1751",
        category: "Kids"
    },
    {
        title: "රතු රකුසා",
        link: "https://t.me/c/2059242652/1750",
        category: "Kids"
    },
    {
        title: "එක දෙක කිරීමේ කතාව",
        link: "https://t.me/c/2059242652/1749",
        category: "Kids"
    },
    {
        title: "මරණීය ලියුමේ අභිරහස",
        link: "https://t.me/c/2059242652/1748",
        category: "Kids"
    },
    {
        title: "හොර කාසි මැෂිම",
        link: "https://t.me/c/2059242652/1747",
        category: "Kids"
    },
    {
        title: "පිස්සු ගෙදර ඇත්තෝ",
        link: "https://t.me/c/2059242652/1746",
        category: "Kids"
    },
    {
        title: "තට්ටු තිහේ පාසල කඩා වැටේ",
        link: "https://t.me/c/2059242652/1745",
        category: "Kids"
    },
    {
        title: "පුංචි දඟකාරි",
        link: "https://t.me/c/2059242652/1744",
        category: "Kids"
    },
    {
        title: "නෝඩි සහ වාමනයෝ",
        link: "https://t.me/c/2059242652/1743",
        category: "Kids"
    },
    {
        title: "තිලක හා තිලකා",
        link: "https://t.me/c/2059242652/1742",
        category: "Kids"
    },
    {
        title: "නස්රුදින් ගේ කතා",
        link: "https://t.me/c/2059242652/1741",
        category: "Kids"
    },
    {
        title: "අපූරු දඩුවම",
        link: "https://t.me/c/2059242652/1740",
        category: "Kids"
    },
    {
        title: "ගූරු පඩුරු",
        link: "https://t.me/c/2059242652/1739",
        category: "Kids"
    },
    {
        title: "හරිම පුදුමයි",
        link: "https://t.me/c/2059242652/1738",
        category: "Kids"
    },
    {
        title: "නිල් පද්මරාගයේ අභිරහස",
        link: "https://t.me/c/2059242652/1737",
        category: "Kids"
    },
    {
        title: "රන් කොල්ලයේ වන්දිය",
        link: "https://t.me/c/2059242652/1736",
        category: "Kids"
    },
    {
        title: "සත් සුමිතුරෝ",
        link: "https://t.me/c/2059242652/1735",
        category: "Kids"
    },
    {
        title: "තිලක",
        link: "https://t.me/c/2059242652/1734",
        category: "Kids"
    },
    {
        title: "යෝධ කිඹුල් පතයා",
        link: "https://t.me/c/2059242652/1733",
        category: "Kids"
    },
    {
        title: "මායාවේ යුවතිය",
        link: "https://t.me/c/2059242652/1732",
        category: "Kids"
    },
    {
        title: "මහල්ලාටත් අශ්වයාටත් පිහිට වූ අන්දම සහ ඩිකී සහ බටහිර සුළඟ",
        link: "https://t.me/c/2059242652/1731",
        category: "Kids"
    },
    {
        title: "පුංචි මායාකාරයෝ",
        link: "https://t.me/c/2059242652/1729",
        category: "Kids"
    },
    {
        title: "රුසියානු ඔත්තුකාරයා",
        link: "https://t.me/c/2059242652/1728",
        category: "Translation"
    },
    {
        title: "කොවුර් මහතාගේ භූත කතා",
        link: "https://t.me/c/2059242652/1727",
        category: "General"
    },
    {
        title: "ලස්සන වෙන්න කැමති පින්වත් දරුවන් ට මෙත් සිත",
        link: "https://t.me/c/2059242652/1726",
        category: "Kids"
    },
    {
        title: "අමුතු අසල්වැසියා",
        link: "https://t.me/c/2059242652/1725",
        category: "Kids"
    },
    {
        title: "මායාකාර කුරුමිට්ටෝ",
        link: "https://t.me/c/2059242652/1724",
        category: "Kids"
    },
    {
        title: "මන්තර බෝනික්කා",
        link: "https://t.me/c/2059242652/1723",
        category: "Kids"
    },
    {
        title: "ජොසෆිනා ගේ කතා පැදුර",
        link: "https://t.me/c/2059242652/1722",
        category: "Kids"
    },
    {
        title: "මහදැනමුත්තා",
        link: "https://t.me/c/2059242652/1721",
        category: "Kids"
    },
    {
        title: "බෝංචි ඇට මොලේ",
        link: "https://t.me/c/2059242652/1720",
        category: "Kids"
    },
    {
        title: "විලම්බීත",
        link: "https://t.me/c/2059242652/1719",
        category: "Kids"
    },
    {
        title: "නෝඩි සහ මිස්ටර් විස්මයකුරු",
        link: "https://t.me/c/2059242652/1718",
        category: "Kids"
    },
    {
        title: "රතු අගුටුමිට්ටෝ",
        link: "https://t.me/c/2059242652/1717",
        category: "Kids"
    },
    {
        title: "වනවදුලේ වික්‍රමය",
        link: "https://t.me/c/2059242652/1716",
        category: "Kids"
    },
    {
        title: "රාස්සගලේ නිධානය",
        link: "https://t.me/c/2059242652/1715",
        category: "Kids"
    },
    {
        title: "මැජික් කන්නාඩිය",
        link: "https://t.me/c/2059242652/1714",
        category: "Kids"
    },
    {
        title: "නෝඩි සහ බිත්තර වැස්ස",
        link: "https://t.me/c/2059242652/1713",
        category: "Kids"
    },
    {
        title: "උක්කුරාලගේ නිධානය",
        link: "https://t.me/c/2059242652/1712",
        category: "Kids"
    },
    {
        title: "වෙනස් වූ ඇලෙක්ස්",
        link: "https://t.me/c/2059242652/1710",
        category: "Kids"
    },
    {
        title: "රොනිගේ පිම්ම",
        link: "https://t.me/c/2059242652/1709",
        category: "Kids"
    },
    {
        title: "අඹර සිල් ගත්ත හැටි",
        link: "https://t.me/c/2059242652/1708",
        category: "Kids"
    },
    {
        title: "චන්දු තමි",
        link: "https://t.me/c/2059242652/1707",
        category: "Kids"
    },
    {
        title: "අක්කා නඟාලා",
        link: "https://t.me/c/2059242652/1706",
        category: "Kids"
    },
    {
        title: "එලොව ගිහින් මෙලොව ආවා",
        link: "https://t.me/c/2059242652/1705",
        category: "Kids"
    },
    {
        title: "කච කච සිමෝනා",
        link: "https://t.me/c/2059242652/1704",
        category: "Kids"
    },
    {
        title: "මෙහෙමත් බූරුවෙක්",
        link: "https://t.me/c/2059242652/1703",
        category: "Kids"
    },
    {
        title: "රිදී කුරය සහිත එළුවා",
        link: "https://t.me/c/2059242652/1702",
        category: "Kids"
    },
    {
        title: "පිනෝකියෝ",
        link: "https://t.me/c/2059242652/1701",
        category: "Kids"
    },
    {
        title: "හිතුවක්කාරයා",
        link: "https://t.me/c/2059242652/1700",
        category: "Kids"
    },
    {
        title: "සැනකෙලියේ අභිරහස",
        link: "https://t.me/c/2059242652/1699",
        category: "Kids"
    },
    {
        title: "පණ ඇති පඹයෝ",
        link: "https://t.me/c/2059242652/1698",
        category: "Kids"
    },
    {
        title: "බොරු කකුල්",
        link: "https://t.me/c/2059242652/1697",
        category: "Kids"
    },
    {
        title: "අසිරිමත් සෙනෙහස",
        link: "https://t.me/c/2059242652/1696",
        category: "Kids"
    },
    {
        title: "දෙසැම්බර් කුණාටුවේ පැමිණි අවතාර",
        link: "https://t.me/c/2059242652/1695",
        category: "Kids"
    },
    {
        title: "සැගවුණු බිම සොයා",
        link: "https://t.me/c/2059242652/1694",
        category: "Kids"
    },
    {
        title: "නෝඩි සහ නලා මාමා",
        link: "https://t.me/c/2059242652/1693",
        category: "Kids"
    },
    {
        title: "ඩෆර්ගේ අලුත් වීරක්‍රියාව",
        link: "https://t.me/c/2059242652/1692",
        category: "Kids"
    },
    {
        title: "වැනියං කළු වැනියං",
        link: "https://t.me/c/2059242652/1691",
        category: "Kids"
    },
    {
        title: "මැජික් යෂ්ටිය",
        link: "https://t.me/c/2059242652/1690",
        category: "Kids"
    },
    {
        title: "බිහිසුණු භූතයා",
        link: "https://t.me/c/2059242652/1689",
        category: "Kids"
    },
    {
        title: "පුංචි පුතුට වැඩ කන්දයි",
        link: "https://t.me/c/2059242652/1687",
        category: "Kids"
    },
    {
        title: "ඔත්තු සොයන පුංචි කෙල්ල",
        link: "https://t.me/c/2059242652/1686",
        category: "Kids"
    },
    {
        title: "ඉබ්බෙකුගේ කතාව",
        link: "https://t.me/c/2059242652/1685",
        category: "Kids"
    },
    {
        title: "නෝඩි සහ මුහුදු ගමන",
        link: "https://t.me/c/2059242652/1684",
        category: "Kids"
    },
    {
        title: "බිහිසුණු හොල්මන් වලව්ව",
        link: "https://t.me/c/2059242652/1683",
        category: "Horror"
    },
    {
        title: "කෑම සූත්තරේ",
        link: "https://t.me/c/2059242652/1682",
        category: "Kids"
    },
    {
        title: "කුරුමිට්ටගේ මාලිගාව",
        link: "https://t.me/c/2059242652/1681",
        category: "Kids"
    },
    {
        title: "දේදුනු චායා",
        author: "සංජීව මහේෂ් පෙරේරා",
        link: "https://t.me/c/2059242652/1679",
        category: "Originals"
    },
    {
        title: "අත්හැරීම - 7",
        link: "https://t.me/c/2059242652/1677",
        category: "Originals"
    },
    {
        title: "අත්හැරීම - 6",
        link: "https://t.me/c/2059242652/1676",
        category: "Originals"
    },
    {
        title: "අත්හැරීම - 5",
        link: "https://t.me/c/2059242652/1675",
        category: "Originals"
    },
    {
        title: "අත්හැරීම - 4",
        link: "https://t.me/c/2059242652/1674",
        category: "Originals"
    },
    {
        title: "අත්හැරීම - 3",
        link: "https://t.me/c/2059242652/1673",
        category: "Originals"
    },
    {
        title: "අත්හැරීම - 2",
        link: "https://t.me/c/2059242652/1672",
        category: "Originals"
    },
    {
        title: "අත්හැරීම 1",
        link: "https://t.me/c/2059242652/1671",
        category: "Originals"
    },
    {
        title: "දුම්බර සිහින",
        author: "චලනි එම් අලහකෝන්",
        link: "https://t.me/c/2059242652/1670",
        category: "Originals"
    },
    {
        title: "නුඹ සුළග නම් මම",
        author: "රංගන දිල්ෂාන්",
        link: "https://t.me/c/2059242652/1669",
        category: "Romance"
    },
    {
        title: "දේවාල දූව",
        link: "https://t.me/c/2059242652/1666",
        category: "Originals"
    },
    {
        title: "යක්ඛරාජ",
        link: "https://t.me/c/2059242652/1665",
        category: "Originals"
    },
    {
        title: "කුර හඬකි වියැකෙන",
        link: "https://t.me/c/2059242652/1664",
        category: "Originals"
    },
    {
        title: "Deneth 2",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1661",
        category: "Originals"
    },
    {
        title: "Deneth 1",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1660",
        category: "Originals"
    },
    {
        title: "සුදු ගෝනා",
        author: "නිව්ටන් ගුණසේකර",
        link: "https://t.me/c/2059242652/1659",
        category: "Originals"
    },
    {
        title: "සුදු වැද්දා",
        link: "https://t.me/c/2059242652/1658",
        category: "Originals"
    },
    {
        title: "Lord of the Rings (සිංහල)",
        link: "https://t.me/c/2059242652/1657",
        category: "Translation"
    },
    {
        title: "දෙනෙත්",
        link: "https://t.me/c/2059242652/1654",
        category: "Originals"
    },
    {
        title: "101ක් කමටහන්",
        author: "සංජය නිර්මාල්",
        link: "https://t.me/c/2059242652/1653",
        category: "Religion"
    },
    {
        title: "පෙම්බර මධූ 6",
        link: "https://t.me/c/2059242652/1652",
        category: "Originals"
    },
    {
        title: "පෙම්බර මධූ 5",
        link: "https://t.me/c/2059242652/1651",
        category: "Originals"
    },
    {
        title: "පෙම්බර මධූ 4",
        link: "https://t.me/c/2059242652/1650",
        category: "Originals"
    },
    {
        title: "පෙම්බර මධූ 3",
        link: "https://t.me/c/2059242652/1649",
        category: "Originals"
    },
    {
        title: "පෙම්බර මධූ 2",
        link: "https://t.me/c/2059242652/1648",
        category: "Originals"
    },
    {
        title: "ආදරය ගින්දරක්",
        link: "https://t.me/c/2059242652/1646",
        category: "Originals"
    },
    {
        title: "දේදුනු",
        link: "https://t.me/c/2059242652/1641",
        category: "Originals"
    },
    {
        title: "හරි පුදුම ඉස්කෝලේ",
        link: "https://t.me/c/2059242652/1640",
        category: "Kids"
    },
    {
        title: "මීලග මීවිත",
        link: "https://t.me/c/2059242652/1639",
        category: "Originals"
    },
    {
        title: "සඳ එළියේ තරමටම",
        link: "https://t.me/c/2059242652/1638",
        category: "Originals"
    },
    {
        title: "ආර්චනා",
        link: "https://t.me/c/2059242652/1637",
        category: "Originals"
    },
    {
        title: "ගඟුලි 2",
        link: "https://t.me/c/2059242652/1636",
        category: "Originals"
    },
    {
        title: "ගඟුලි 1",
        link: "https://t.me/c/2059242652/1635",
        category: "Originals"
    },
    {
        title: "හත්දින්නත් තරු",
        link: "https://t.me/c/2059242652/1634",
        category: "Originals"
    },
    {
        title: "මධු යාමයේ සිහිනය",
        link: "https://t.me/c/2059242652/1632",
        category: "Originals"
    },
    {
        title: "සඳ කිඳුරි නුඹයි",
        link: "https://t.me/c/2059242652/1631",
        category: "Originals"
    },
    {
        title: "අම්මා",
        author: "උපුල් ශාන්ත සන්නස්ගල",
        link: "https://t.me/c/2059242652/1629",
        category: "Originals"
    },
    {
        title: "රූකී 3",
        link: "https://t.me/c/2059242652/1628",
        category: "Originals"
    },
    {
        title: "රූකී 2",
        link: "https://t.me/c/2059242652/1627",
        category: "Originals"
    },
    {
        title: "සංසාර මන්දිරය (Many Mansions)",
        link: "https://t.me/c/2059242652/1624",
        category: "Translation"
    },
    {
        title: "දෙහදක කතාවක්",
        link: "https://t.me/c/2059242652/1621",
        category: "Originals"
    },
    {
        title: "මන්දාරා",
        link: "https://t.me/c/2059242652/1612",
        category: "Originals"
    },
    {
        title: "දවල හංසි 02",
        link: "https://t.me/c/2059242652/1608",
        category: "Originals"
    },
    {
        title: "දවල හංසි",
        link: "https://t.me/c/2059242652/1607",
        category: "Originals"
    },
    {
        title: "බොඳ මීදුම් 03",
        link: "https://t.me/c/2059242652/1606",
        category: "Originals"
    },
    {
        title: "මහමෙව්නා",
        link: "https://t.me/c/2059242652/1603",
        category: "Originals"
    },
    {
        title: "සින්දුර් 4",
        link: "https://t.me/c/2059242652/1596",
        category: "Originals"
    },
    {
        title: "සින්දුර් 3",
        link: "https://t.me/c/2059242652/1595",
        category: "Originals"
    },
    {
        title: "සින්දුර් 2",
        link: "https://t.me/c/2059242652/1594",
        category: "Originals"
    },
    {
        title: "සින්දුර් 1",
        link: "https://t.me/c/2059242652/1593",
        category: "Originals"
    },
    {
        title: "බක්කරේ 5",
        link: "https://t.me/c/2059242652/1592",
        category: "Originals"
    },
    {
        title: "බක්කරේ 4",
        link: "https://t.me/c/2059242652/1591",
        category: "Originals"
    },
    {
        title: "බක්කරේ 3",
        link: "https://t.me/c/2059242652/1590",
        category: "Originals"
    },
    {
        title: "බක්කරේ 2",
        link: "https://t.me/c/2059242652/1589",
        category: "Originals"
    },
    {
        title: "බක්කරේ 1",
        link: "https://t.me/c/2059242652/1588",
        category: "Originals"
    },
    {
        title: "වර්ෂා 15",
        link: "https://t.me/c/2059242652/1587",
        category: "Originals"
    },
    {
        title: "වර්ෂා 14",
        link: "https://t.me/c/2059242652/1586",
        category: "Originals"
    },
    {
        title: "වර්ෂා 13",
        link: "https://t.me/c/2059242652/1585",
        category: "Originals"
    },
    {
        title: "වර්ෂා 12",
        link: "https://t.me/c/2059242652/1584",
        category: "Originals"
    },
    {
        title: "වර්ෂා 11",
        link: "https://t.me/c/2059242652/1583",
        category: "Originals"
    },
    {
        title: "වර්ෂා 10",
        link: "https://t.me/c/2059242652/1582",
        category: "Originals"
    },
    {
        title: "වර්ෂා 9",
        link: "https://t.me/c/2059242652/1581",
        category: "Originals"
    },
    {
        title: "වර්ෂා 8",
        link: "https://t.me/c/2059242652/1580",
        category: "Originals"
    },
    {
        title: "වර්ෂා 7",
        link: "https://t.me/c/2059242652/1579",
        category: "Originals"
    },
    {
        title: "වර්ෂා 6",
        link: "https://t.me/c/2059242652/1578",
        category: "Originals"
    },
    {
        title: "වර්ෂා 5",
        link: "https://t.me/c/2059242652/1577",
        category: "Originals"
    },
    {
        title: "වර්ෂා 4",
        link: "https://t.me/c/2059242652/1576",
        category: "Originals"
    },
    {
        title: "වර්ෂා 3",
        link: "https://t.me/c/2059242652/1575",
        category: "Originals"
    },
    {
        title: "වර්ෂා 2",
        link: "https://t.me/c/2059242652/1574",
        category: "Originals"
    },
    {
        title: "වර්ෂා 1",
        link: "https://t.me/c/2059242652/1573",
        category: "Originals"
    },
    {
        title: "සපූ 6",
        link: "https://t.me/c/2059242652/1572",
        category: "Originals"
    },
    {
        title: "සපූ 5",
        link: "https://t.me/c/2059242652/1571",
        category: "Originals"
    },
    {
        title: "සපූ 4",
        link: "https://t.me/c/2059242652/1570",
        category: "Originals"
    },
    {
        title: "සපූ 3",
        link: "https://t.me/c/2059242652/1569",
        category: "Originals"
    },
    {
        title: "සපූ 2",
        link: "https://t.me/c/2059242652/1568",
        category: "Originals"
    },
    {
        title: "සපූ 1",
        link: "https://t.me/c/2059242652/1567",
        category: "Originals"
    },
    {
        title: "ආදරයක පාට",
        link: "https://t.me/c/2059242652/1560",
        category: "Originals"
    },
    {
        title: "පත්තීනි වන්දනා 4",
        link: "https://t.me/c/2059242652/1557",
        category: "Originals"
    },
    {
        title: "පත්තීනි වන්දනා 3",
        link: "https://t.me/c/2059242652/1556",
        category: "Originals"
    },
    {
        title: "පත්තීනි වන්දනා 2",
        link: "https://t.me/c/2059242652/1555",
        category: "Originals"
    },
    {
        title: "පත්තීනි වන්දනා 1",
        link: "https://t.me/c/2059242652/1554",
        category: "Originals"
    },
    {
        title: "තාරු 3",
        link: "https://t.me/c/2059242652/1553",
        category: "Originals"
    },
    {
        title: "තාරු 2",
        link: "https://t.me/c/2059242652/1552",
        category: "Originals"
    },
    {
        title: "තාරු 1",
        link: "https://t.me/c/2059242652/1551",
        category: "Originals"
    },
    {
        title: "කුංකුම අංජන 2",
        link: "https://t.me/c/2059242652/1550",
        category: "Originals"
    },
    {
        title: "කුංකුම අංජන 1",
        link: "https://t.me/c/2059242652/1549",
        category: "Originals"
    },
    {
        title: "සඳ වාසනා 2",
        link: "https://t.me/c/2059242652/1548",
        category: "Originals"
    },
    {
        title: "සඳ වාසනා 1",
        link: "https://t.me/c/2059242652/1547",
        category: "Originals"
    },
    {
        title: "සුවඳ රොන්සුනු",
        link: "https://t.me/c/2059242652/1535",
        category: "Originals"
    },
    {
        title: "සුදු සමනලී",
        link: "https://t.me/c/2059242652/1534",
        category: "Originals"
    },
    {
        title: "දුහුල් වළාකුළු",
        link: "https://t.me/c/2059242652/1533",
        category: "Originals"
    },
    {
        title: "කම්මලේ දෝංකාරය",
        link: "https://t.me/c/2059242652/1529",
        category: "Originals"
    },
    {
        title: "සඳ දියෙන්",
        link: "https://t.me/c/2059242652/1528",
        category: "Originals"
    },
    {
        title: "ඔබ නිසා",
        link: "https://t.me/c/2059242652/1527",
        category: "Originals"
    },
    {
        title: "ඔබ මට මැණිකකි",
        link: "https://t.me/c/2059242652/1526",
        category: "Originals"
    },
    {
        title: "මර්යාදා",
        link: "https://t.me/c/2059242652/1525",
        category: "Originals"
    },
    {
        title: "දේදුනු චායා (Full)",
        link: "https://t.me/c/2059242652/1524",
        category: "Originals"
    },
    {
        title: "සොල්දාදු පෙම්වති",
        link: "https://t.me/c/2059242652/1522",
        category: "Originals"
    },
    {
        title: "ගිම්හානෙට හිම පතිත වෙලා 2",
        link: "https://t.me/c/2059242652/1521",
        category: "Originals"
    },
    {
        title: "මල් පාවඩ",
        link: "https://t.me/c/2059242652/1520",
        category: "Originals"
    },
    {
        title: "ගිම්හානෙට හිම පතිත වෙලා 1",
        link: "https://t.me/c/2059242652/1519",
        category: "Originals"
    },
    {
        title: "සේයා",
        link: "https://t.me/c/2059242652/1518",
        category: "Originals"
    },
    {
        title: "සංසලේ රාත්‍රිය",
        link: "https://t.me/c/2059242652/1517",
        category: "Originals"
    },
    {
        title: "ශාහෙලි",
        link: "https://t.me/c/2059242652/1516",
        category: "Originals"
    },
    {
        title: "දුරුතු හිරි",
        link: "https://t.me/c/2059242652/1515",
        category: "Originals"
    },
    {
        title: "අනන්ත තරු මල්",
        link: "https://t.me/c/2059242652/1514",
        category: "Originals"
    },
    {
        title: "ආදරණීය නිම්සා 1",
        link: "https://t.me/c/2059242652/1513",
        category: "Originals"
    },
    {
        title: "කඳු මුදුනේ සොඳුරු නිවස",
        link: "https://t.me/c/2059242652/1512",
        category: "Translation"
    },
    {
        title: "ෂර්ලෝක් හෝම්ස් වගේ හිතන්නෙ කොහොමද?",
        link: "https://t.me/c/2059242652/1509",
        category: "Self Help"
    },
    {
        title: "ජීවිතය වෙනස් කරන කතා 3",
        author: "කැළුම් වැලිගම",
        link: "https://t.me/c/2059242652/1508",
        category: "Self Help"
    },
    {
        title: "New Doc 2020-10-26 20.59.50",
        link: "https://t.me/c/2059242652/1504",
        category: "Other"
    },
    {
        title: "Book 2020-10-26 18.24.07",
        link: "https://t.me/c/2059242652/1501",
        category: "Other"
    },
    {
        title: "නිල් කටරොළු",
        link: "https://t.me/c/2059242652/1498",
        category: "Originals"
    },
    {
        title: "මැකී ගිය දඩමං",
        author: "ඒ පී ගුණරත්න",
        link: "https://t.me/c/2059242652/1497",
        category: "Originals"
    },
    {
        title: "සසඳි",
        link: "https://t.me/c/2059242652/1496",
        category: "Originals"
    },
    {
        title: "දයාබර ඩාලියා",
        description: "Forbidden love by Norma Khouri",
        link: "https://t.me/c/2059242652/1495",
        category: "Translation"
    },
    {
        title: "තිත්ත කෝපි",
        link: "https://t.me/c/2059242652/1494",
        category: "Originals"
    },
    {
        title: "හැංගි විහඟි",
        author: "දිලීප ජයකොඩි",
        link: "https://t.me/c/2059242652/1492",
        category: "Originals"
    },
    {
        title: "දළදා වීදිය",
        link: "https://t.me/c/2059242652/1488",
        category: "Originals"
    },
    {
        title: "විස්මිත සිහින දකින්න",
        link: "https://t.me/c/2059242652/1486",
        category: "General"
    },
    {
        title: "හොල්මන් තානායමේ අභිරහස",
        author: "දයා ඩී ෆොන්සේකා",
        link: "https://t.me/c/2059242652/1485",
        category: "Translation"
    },
    {
        title: "නැන්සි ඩ්‍රෝ අඳුරු ගුහාවේ අබිරහස",
        author: "සුදත් රොහාන්",
        link: "https://t.me/c/2059242652/1483",
        category: "Translation"
    },
    {
        title: "නෙත් දිය ගඟුලක්",
        link: "https://t.me/c/2059242652/1480",
        category: "Originals"
    },
    {
        title: "මළවුන්ගේ අවුරුදු දා",
        author: "එදිරිවීර සරච්චන්ද්‍ර",
        link: "https://t.me/c/2059242652/1479",
        category: "Originals"
    },
    {
        title: "සසා Final",
        link: "https://t.me/c/2059242652/1476",
        category: "Originals"
    },
    {
        title: "සසා - 1",
        link: "https://t.me/c/2059242652/1475",
        category: "Originals"
    },
    {
        title: "සංවේදී ඇත්ත කතාවක්",
        link: "https://t.me/c/2059242652/1472",
        category: "Originals"
    },
    {
        title: "මේඝා 02",
        author: "තරංගා දිසානායක",
        link: "https://t.me/c/2059242652/1471",
        category: "Originals"
    },
    {
        title: "මේඝා",
        author: "තරංගා දිසානායක",
        link: "https://t.me/c/2059242652/1470",
        category: "Originals"
    },
    {
        title: "යෞවන වසන්තය 2",
        author: "චේතනා නානායක්කාර",
        link: "https://t.me/c/2059242652/1469",
        category: "Originals"
    },
    {
        title: "යෞවන වසන්තය 1",
        author: "චේතනා නානායක්කාර",
        link: "https://t.me/c/2059242652/1468",
        category: "Originals"
    },
    {
        title: "මිදි ඔය අසබඩ (Little House 4)",
        link: "https://t.me/c/2059242652/1462",
        category: "Kids"
    },
    {
        title: "අල්මන්සෝ පුංචි ගොවියා (Little House 3)",
        link: "https://t.me/c/2059242652/1461",
        category: "Kids"
    },
    {
        title: "පායන්න සිත් අහසේ",
        author: "සුරංගි අතුකෝරල",
        link: "https://t.me/c/2059242652/1458",
        category: "Originals"
    },
    {
        title: "මගේ දුඹුරු ලමිස්සි 2",
        link: "https://t.me/c/2059242652/1457",
        category: "Originals"
    },
    {
        title: "මගේ දුඹුරු ලමිස්සි 1",
        link: "https://t.me/c/2059242652/1456",
        category: "Originals"
    },
    {
        title: "කිහිරඟුරු 2",
        link: "https://t.me/c/2059242652/1449",
        category: "Originals"
    },
    {
        title: "කිහිඟුරු 1",
        link: "https://t.me/c/2059242652/1448",
        category: "Originals"
    },
    {
        title: "Twilight - හිමිදිරි උදාව (Breaking Dawn) part 2",
        link: "https://t.me/c/2059242652/1447",
        category: "Translation"
    },
    {
        title: "Twilight - හිමිදිරි උදාව (Breaking Dawn) part 1",
        link: "https://t.me/c/2059242652/1446",
        category: "Translation"
    },
    {
        title: "මිලින හිරු (Eclipse - Twilight 3)",
        link: "https://t.me/c/2059242652/1445",
        category: "Translation"
    },
    {
        title: "අමාවක (New Moon - Twilight 2)",
        link: "https://t.me/c/2059242652/1444",
        category: "Translation"
    },
    {
        title: "ගොම්මන් කළුවර (Twilight 1)",
        link: "https://t.me/c/2059242652/1443",
        category: "Translation"
    },
    {
        title: "ටුටු",
        author: "ශාන්ත කුමාර විතාන",
        link: "https://t.me/c/2059242652/1441",
        category: "Originals"
    },
    {
        title: "ජුහි",
        author: "චලනි එම් අලහකෝන්",
        link: "https://t.me/c/2059242652/1439",
        category: "Originals"
    },
    {
        title: "සැනසෙන්නම් මා",
        author: "සතී පෙරේරා",
        link: "https://t.me/c/2059242652/1438",
        category: "Originals"
    },
    {
        title: "වැසිදා රෑ",
        author: "ජයශංඛ කරුණාරත්න",
        link: "https://t.me/c/2059242652/1437",
        category: "Originals"
    },
    {
        title: "සුළග හෙමින් හැමුවාවේ",
        author: "කෞෂි මුතුකුමාරණ",
        link: "https://t.me/c/2059242652/1436",
        category: "Originals"
    },
    {
        title: "අරඹෙ ගෙදර ඈන් VI",
        link: "https://t.me/c/2059242652/1435",
        category: "Translation"
    },
    {
        title: "අරඹෙ ගෙදර ඈන් V",
        link: "https://t.me/c/2059242652/1434",
        category: "Translation"
    },
    {
        title: "අරඹෙ ගෙදර ඈන් IV",
        link: "https://t.me/c/2059242652/1433",
        category: "Translation"
    },
    {
        title: "අරඹෙ ගෙදර ඈන් III",
        link: "https://t.me/c/2059242652/1432",
        category: "Translation"
    },
    {
        title: "අරඹෙ ගෙදර ඈන් II",
        link: "https://t.me/c/2059242652/1431",
        category: "Translation"
    },
    {
        title: "අරඹෙ ගෙදර ඈන් I",
        link: "https://t.me/c/2059242652/1430",
        category: "Translation"
    },
    {
        title: "හොල්මන් කතා (නැන්සි ඩ්‍රෝ)",
        link: "https://t.me/c/2059242652/1428",
        category: "Translation"
    },
    {
        title: "Nancy Drew කිඹුල් දූපත",
        link: "https://t.me/c/2059242652/1426",
        category: "Translation"
    },
    {
        title: "Dear කියුටි",
        author: "චලනි එම් අලහකෝන්",
        link: "https://t.me/c/2059242652/1424",
        category: "Romance"
    },
    {
        title: "අනන්තය",
        author: "ශ්‍රීමාලි කරුණානායක",
        link: "https://t.me/c/2059242652/1423",
        category: "Originals"
    },
    {
        title: "නිමක් නැති කතාවක්",
        author: "චමිත් සුලක්ෂණ විජේසූරිය",
        link: "https://t.me/c/2059242652/1422",
        category: "Originals"
    },
    {
        title: "බිනර තරු",
        author: "ශාන්ත කුමාර විතාන",
        link: "https://t.me/c/2059242652/1421",
        category: "Originals"
    },
    {
        title: "සිතූ",
        author: "ගයනා එස් ලක්මාලි",
        link: "https://t.me/c/2059242652/1420",
        category: "Originals"
    },
    {
        title: "හීන අහුරු",
        author: "කෞෂි මුතුකුමාරණ",
        link: "https://t.me/c/2059242652/1419",
        category: "Originals"
    },
    {
        title: "මාර්කෝ පෝලෝ",
        link: "https://t.me/c/2059242652/1416",
        category: "History"
    },
    {
        title: "සදාකාලික සිහිනයක්",
        author: "ගංගා ශයිනි ගමගේ",
        link: "https://t.me/c/2059242652/1414",
        category: "Originals"
    },
    {
        title: "වස්සානයට අඬ ගසන්න",
        author: "ගංගා ශයිනි ගමගේ",
        link: "https://t.me/c/2059242652/1413",
        category: "Originals"
    },
    {
        title: "වීදි කුණාටු",
        author: "ගයානා එස් ලක්මාලි",
        link: "https://t.me/c/2059242652/1412",
        category: "Originals"
    },
    {
        title: "පොකුරු මිණි",
        author: "චන්දි කොඩිකාර",
        link: "https://t.me/c/2059242652/1411",
        category: "Originals"
    },
    {
        title: "ශ්‍රී 2",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1410",
        category: "Originals"
    },
    {
        title: "ශ්‍රී 1",
        author: "සුජීව ප්‍රසන්න ආරච්චි",
        link: "https://t.me/c/2059242652/1409",
        category: "Originals"
    },
    {
        title: "වස්සානය නිමාවිය",
        link: "https://t.me/c/2059242652/1407",
        category: "Originals"
    },
    {
        title: "මරණාසන්න අත්දැකීමක්",
        link: "https://t.me/c/2059242652/1406",
        category: "General"
    },
    {
        title: "ඒ මගේ මලයි",
        link: "https://t.me/c/2059242652/1402",
        category: "Romance"
    },
    {
        title: "ත්‍රෛලෝක්‍යවිජයා",
        link: "https://t.me/c/2059242652/1401",
        category: "Originals"
    },
    {
        title: "ආදරණීය බෙකම්",
        link: "https://t.me/c/2059242652/1398",
        category: "Originals"
    },
    {
        title: "මධු ගීතය",
        link: "https://t.me/c/2059242652/1396",
        category: "Originals"
    },
    {
        title: "Forget me Bimba",
        link: "https://t.me/c/2059242652/1395",
        category: "Originals"
    },
    {
        title: "ආයු මනෝරි සිලිකා",
        link: "https://t.me/c/2059242652/1394",
        category: "Originals"
    },
    {
        title: "නදීතෙර කුමරිය",
        link: "https://t.me/c/2059242652/1393",
        category: "Originals"
    },
    {
        title: "රන් දෙවඟන",
        link: "https://t.me/c/2059242652/1392",
        category: "Originals"
    },
    {
        title: "ඒකාධිපති හිට්ලර්",
        link: "https://t.me/c/2059242652/1390",
        category: "History"
    },
    {
        title: "Secret Seven | බාර්ස් ගබඩාවේ රහස් කල්ලිය",
        link: "https://t.me/c/2059242652/1389",
        category: "Kids"
    },
    {
        title: "Secret Seven | අතුරුදහන් වූ යුවතිය",
        link: "https://t.me/c/2059242652/1388",
        category: "Kids"
    },
    {
        title: "ත්‍රෛලෝක්‍යවිජයා",
        author: "වසන්ත සේනා වැලිඅංග",
        link: "https://t.me/c/2059242652/1387",
        category: "Originals"
    },
    {
        title: "රිඳී පියාපත්",
        link: "https://t.me/c/2059242652/1386",
        category: "Originals"
    },
    {
        title: "අහිංසකාවී",
        link: "https://t.me/c/2059242652/1384",
        category: "Originals"
    },
    {
        title: "භාෂිනි",
        link: "https://t.me/c/2059242652/1383",
        category: "Originals"
    },
    {
        title: "සිත දඟකාරයි",
        link: "https://t.me/c/2059242652/1382",
        category: "Originals"
    },
    {
        title: "අහස අහිමි කුරුල්ලෝ",
        link: "https://t.me/c/2059242652/1381",
        category: "Originals"
    },
    {
        title: "දඬු අඩුව",
        link: "https://t.me/c/2059242652/1380",
        category: "Originals"
    },
    {
        title: "ආදරේ අහස තරම්",
        link: "https://t.me/c/2059242652/1379",
        category: "Originals"
    },
    {
        title: "හීන තාමත් සීතලයි",
        link: "https://t.me/c/2059242652/1378",
        category: "Originals"
    },
    {
        title: "තාරකා රාත්‍රිය",
        link: "https://t.me/c/2059242652/1377",
        category: "Originals"
    },
    {
        title: "ගුප්ත විද්‍යාව හා අමනුශ්‍ය ලෝකය",
        link: "https://t.me/c/2059242652/1370",
        category: "Horror"
    },
    {
        title: "බස්තියන්ගේ සොහොන",
        link: "https://t.me/c/2059242652/1369",
        category: "Horror"
    },
    {
        title: "මීදුමෙන් ආ මාරයා",
        link: "https://t.me/c/2059242652/1368",
        category: "Horror"
    },
    {
        title: "Sherlock Holmes - මහා රෑ ආ මරයා",
        link: "https://t.me/c/2059242652/1363",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes - අභිරහස් දොස්තර",
        link: "https://t.me/c/2059242652/1362",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes - අන්තරාදායක අඩවියක",
        link: "https://t.me/c/2059242652/1361",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes - ප්‍රදීපාගාරයේ වික්‍රමය",
        link: "https://t.me/c/2059242652/1360",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes - කලු ව්‍යාඝ්‍රයා",
        link: "https://t.me/c/2059242652/1359",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes - ලේ සලකුණ",
        link: "https://t.me/c/2059242652/1358",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes - ආපසු එයි",
        link: "https://t.me/c/2059242652/1357",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes - මළගිය ඇත්තෝ සාක්කි දෙති",
        link: "https://t.me/c/2059242652/1356",
        category: "Translation"
    },
    {
        title: "Sherlock Holmes - බිහිසුණු නිම්නය",
        link: "https://t.me/c/2059242652/1355",
        category: "Translation"
    },
    {
        title: "සංජනා",
        link: "https://t.me/c/2059242652/1352",
        category: "Originals"
    },
    {
        title: "රතු පිච්ච මල්",
        link: "https://t.me/c/2059242652/1351",
        category: "Originals"
    },
    {
        title: "සඳු මාමා 3",
        link: "https://t.me/c/2059242652/1349",
        category: "Originals"
    },
    {
        title: "සඳු මාමා 2",
        link: "https://t.me/c/2059242652/1348",
        category: "Originals"
    },
    {
        title: "සඳු මාමා 1",
        link: "https://t.me/c/2059242652/1347",
        category: "Originals"
    },
    {
        title: "Roald Dahl - The Magic Finger",
        link: "https://t.me/c/2059242652/1346",
        category: "Kids"
    },
    {
        title: "විලාන් 3",
        link: "https://t.me/c/2059242652/1345",
        category: "Originals"
    },
    {
        title: "විලාන් 2",
        link: "https://t.me/c/2059242652/1344",
        category: "Originals"
    },
    {
        title: "විලාන් 1",
        link: "https://t.me/c/2059242652/1343",
        category: "Originals"
    },
    {
        title: "තිසුරි",
        author: "සචී කුලරත්න",
        link: "https://t.me/c/2059242652/1342",
        category: "Originals"
    },
    {
        title: "මනුතාපය",
        link: "https://t.me/c/2059242652/1333",
        category: "Originals"
    },
    {
        title: "ආදරයක පාට පාට",
        link: "https://t.me/c/2059242652/1332",
        category: "Originals"
    },
    {
        title: "ඇරිඹු",
        author: "ශ්‍රියානි චමිලා",
        link: "https://t.me/c/2059242652/1331",
        category: "Originals"
    },
    {
        title: "දෝතක් මල්",
        link: "https://t.me/c/2059242652/1325",
        category: "Originals"
    },
    {
        title: "රාමායනය",
        link: "https://t.me/c/2059242652/1324",
        category: "History"
    },
    {
        title: "විහාර වලව්ව",
        link: "https://t.me/c/2059242652/1305",
        category: "Originals"
    },
    {
        title: "හොඳම යෙහෙළිය",
        link: "https://t.me/c/2059242652/1302",
        category: "Originals"
    },
    {
        title: "එහෙම වෙන්නෙ ඇයි (විද්‍යාත්මක දැනුම)",
        link: "https://t.me/c/2059242652/1301",
        category: "Science Fiction"
    },
    {
        title: "සුදෝ සුදු",
        author: "කේයස්",
        link: "https://t.me/c/2059242652/1300",
        category: "Originals"
    },
    {
        title: "වැහි වළාව 1",
        link: "https://t.me/c/2059242652/1299",
        category: "Originals"
    },
    {
        title: "අහම්බකාරක",
        link: "https://t.me/c/2059242652/1297",
        category: "Originals"
    },
    {
        title: "නිළුපුලි 2",
        link: "https://t.me/c/2059242652/1296",
        category: "Originals"
    },
    {
        title: "නිළුපුලි 1",
        link: "https://t.me/c/2059242652/1295",
        category: "Originals"
    },
    {
        title: "සිතින් බැඳි ඇති නිසා 2",
        link: "https://t.me/c/2059242652/1294",
        category: "Originals"
    },
    {
        title: "සිතින් බැඳි ඇති නිසා",
        link: "https://t.me/c/2059242652/1293",
        category: "Originals"
    },
    {
        title: "සුහදියා",
        link: "https://t.me/c/2059242652/1292",
        category: "Originals"
    },
    {
        title: "දේදුනු සිහිනය 2",
        link: "https://t.me/c/2059242652/1291",
        category: "Originals"
    },
    {
        title: "දේදුනු සිහිනය 1",
        link: "https://t.me/c/2059242652/1290",
        category: "Originals"
    },
    {
        title: "පෙමතො ජායතී සෝකෝ",
        author: "එදිරිවීර සරච්චන්ද්‍ර",
        link: "https://t.me/c/2059242652/1289",
        category: "Originals"
    },
    {
        title: "ගොළු හදවත",
        link: "https://t.me/c/2059242652/1288",
        category: "Originals"
    },
    {
        title: "Many Mansions (Sinhala: Sansara Mandira)",
        link: "https://t.me/c/2059242652/1287",
        category: "Translation"
    },
    {
        title: "කරූ ලියූ කවි",
        link: "https://t.me/c/2059242652/1283",
        category: "Poems"
    },
    {
        title: "ප්‍රභාස්වර චිත්ත නිර්මාණකරණය",
        link: "https://t.me/c/2059242652/1282",
        category: "Religion"
    },
    {
        title: "සද්ධර්ම රත්නාවලිය",
        link: "https://t.me/c/2059242652/1281",
        category: "Religion"
    },
    {
        title: "වක්කලම",
        link: "https://t.me/c/2059242652/1280",
        category: "Originals"
    },
    {
        title: "කටු අත්ත",
        link: "https://t.me/c/2059242652/1279",
        category: "Originals"
    },
    {
        title: "අම්මයි දුවයි",
        link: "https://t.me/c/2059242652/1278",
        category: "Originals"
    },
    {
        title: "මිහිරාවිය",
        link: "https://t.me/c/2059242652/1277",
        category: "Originals"
    },
    {
        title: "ශ්‍රීලංකාවේ රාජාවලිය",
        link: "https://t.me/c/2059242652/1276",
        category: "History"
    },
    {
        title: "බිඳුණු බිළින්දා (Damaged)",
        author: "Kathy Glass",
        link: "https://t.me/c/2059242652/1274",
        category: "Translation"
    },
    {
        title: "බිහිසුණු ඡායා",
        link: "https://t.me/c/2059242652/1273",
        category: "Horror"
    },
    {
        title: "හඳවේ හෙවනැලි",
        author: "බද්‍රජි මහින්ද ජයතිලක",
        link: "https://t.me/c/2059242652/1272",
        category: "Originals"
    },
    {
        title: "පලිගත් භූත ආත්මය",
        link: "https://t.me/c/2059242652/1271",
        category: "Horror"
    },
    {
        title: "ගන්දර කළපුව",
        author: "බද්‍රජි මහින්ද ජයතිලක",
        link: "https://t.me/c/2059242652/1270",
        category: "Originals"
    },
    {
        title: "Mystery of the three deaths",
        link: "https://t.me/c/2059242652/1268",
        category: "Translation"
    },
    {
        title: "සර්පයාගේ සෙවනැල්ල (The Kane Chronicles 3)",
        author: "Rick Riordan",
        link: "https://t.me/c/2059242652/1267",
        category: "Translation"
    },
    {
        title: "අග්නි සිහසුන (The Kane Chronicles 2)",
        author: "Rick Riordan",
        link: "https://t.me/c/2059242652/1266",
        category: "Translation"
    },
    {
        title: "Seven Wonders 3 - සෙවනැලි සොහොන",
        link: "https://t.me/c/2059242652/1264",
        category: "Translation"
    },
    {
        title: "Seven Wonders 1 - ප්‍රතිමාවේ පිබිදීම",
        link: "https://t.me/c/2059242652/1263",
        category: "Translation"
    },
    {
        title: "Seven Wonders 2 - බැබිලෝනියාවේ අතරමං වී part 1",
        link: "https://t.me/c/2059242652/1262",
        category: "Translation"
    },
    {
        title: "Seven Wonders 4 - දෙවියන්ගේ ශාපය",
        link: "https://t.me/c/2059242652/1261",
        category: "Translation"
    },
    {
        title: "සැබෑ මිනිසෙකුගේ කතාවක්",
        link: "https://t.me/c/2059242652/1260",
        category: "Translation"
    },
    {
        title: "Famous Five 6 අරුම පුදුම පරීක්ශනයක්",
        link: "https://t.me/c/2059242652/1255",
        category: "Kids"
    },
    {
        title: "පන් පසිඳු කිරීන් දූපතේ සැඟවුනු අභිරහස (Famous Five)",
        link: "https://t.me/c/2059242652/1252",
        category: "Kids"
    },
    {
        title: "පන් පසිඳු කරදරයක පැටලිලා (Famous Five)",
        link: "https://t.me/c/2059242652/1251",
        category: "Kids"
    },
    {
        title: "පන් පසිඳු කුනාටු රැයේ අභිරහස් එළියක් (Famous Five)",
        link: "https://t.me/c/2059242652/1250",
        category: "Kids"
    },
    {
        title: "Seven Wonders 5 ඇලෙක්සැන්ඩ්‍රියාවේ බිහිසුණු චාරිකාව",
        link: "https://t.me/c/2059242652/1246",
        category: "Translation"
    },
    {
        title: "Fantastic Beasts The Crimes of Grindelwald the Original Screenplay",
        link: "https://t.me/c/2059242652/1245",
        category: "Translation"
    },
    {
        title: "Delusions",
        link: "https://t.me/c/2059242652/1244",
        category: "General"
    },
    {
        title: "Meyler's Side Effects of Psychiatric Drugs",
        link: "https://t.me/c/2059242652/1243",
        category: "General"
    },
    {
        title: "VITAMIN D",
        link: "https://t.me/c/2059242652/1242",
        category: "General"
    },
    {
        title: "Introduction to Psychology",
        link: "https://t.me/c/2059242652/1241",
        category: "General"
    },
    {
        title: "Treatable and Potentially Preventable Dementias",
        link: "https://t.me/c/2059242652/1240",
        category: "General"
    },
    {
        title: "Brain Stimulation Methodologies",
        link: "https://t.me/c/2059242652/1239",
        category: "General"
    },
    {
        title: "ACSM'S Resources for the Personal Trainer",
        link: "https://t.me/c/2059242652/1238",
        category: "General"
    },
    {
        title: "Cognitive Therapy For Personality Disorders: A Guide",
        author: "Kate Davidson",
        link: "https://t.me/c/2059242652/1237",
        category: "General"
    },
    {
        title: "ගජමෑන්",
        link: "https://t.me/c/2059242652/1236",
        category: "Originals"
    },
    {
        title: "ආදරණීය බෙකම් 3 - ආයෙමත් ආදරෙන්",
        link: "https://t.me/c/2059242652/1232",
        category: "Originals"
    },
    {
        title: "ආදරණීය බෙකම් 2",
        link: "https://t.me/c/2059242652/1231",
        category: "Originals"
    },
    {
        title: "ආදරණීය බෙකම් 1 - සොඳුරු නවෝදය",
        link: "https://t.me/c/2059242652/1230",
        category: "Originals"
    },
    {
        title: "කන්දක් සේ මා",
        link: "https://t.me/c/2059242652/1229",
        category: "Originals"
    },
    {
        title: "ඡායා 3",
        link: "https://t.me/c/2059242652/1228",
        category: "Originals"
    },
    {
        title: "නොහැඬූ සිරකාරිය",
        link: "https://t.me/c/2059242652/1227",
        category: "Originals"
    },
    {
        title: "සුළඟ වගේ ඇවිදින්",
        link: "https://t.me/c/2059242652/1226",
        category: "Originals"
    },
    {
        title: "විලියම් සහ කිරි සුදු පූසා 5",
        author: "සුදත් රොහාන් (Richmal Crompton)",
        link: "https://t.me/c/2059242652/1225",
        category: "Kids"
    },
    {
        title: "ස්කෙලිටන් දූපතේ වික්‍රමය",
        author: "විශාකා ජයම්පති මහවිතාන (Skeleton Island)",
        link: "https://t.me/c/2059242652/1224",
        category: "Translation"
    },
    {
        title: "අත්භූත මනාලී",
        author: "ලසිත රවින් උමගිලිය (Curious Bride by Erle Stanly Gardner)",
        link: "https://t.me/c/2059242652/1223",
        category: "Translation"
    },
    {
        title: "ලොනා ඩූන්",
        author: "සොමා ටී පෙරේරා (Lorna Doone by R D Blackmore)",
        link: "https://t.me/c/2059242652/1222",
        category: "Translation"
    },
    {
        title: "සුපෙම් පාරමී",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1220",
        category: "Originals"
    },
    {
        title: "එක රැව දෙහදක නතර වෙලා",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1219",
        category: "Originals"
    },
    {
        title: "රාධා",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1218",
        category: "Originals"
    },
    {
        title: "සෙනෙහස් අරණ",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1217",
        category: "Originals"
    },
    {
        title: "සඳ තුහින",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1216",
        category: "Originals"
    },
    {
        title: "සුසුම් සැනසුම්",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1215",
        category: "Originals"
    },
    {
        title: "වත්සලතාවී",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1214",
        category: "Originals"
    },
    {
        title: "ස්වප්න වර්ෂා",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1213",
        category: "Originals"
    },
    {
        title: "පියුමින්දි",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1212",
        category: "Originals"
    },
    {
        title: "රිද්ම පූජා",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1211",
        category: "Originals"
    },
    {
        title: "බකිනි මලට පිණි වැටිලා",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1210",
        category: "Originals"
    },
    {
        title: "සදු මිදු",
        author: "වත්සලා කරැණාරත්න",
        link: "https://t.me/c/2059242652/1206",
        category: "Originals"
    },
    {
        title: "වලව් පුතා",
        author: "රැවනි ලියන්ගොල්ල",
        link: "https://t.me/c/2059242652/1205",
        category: "Originals"
    },
    {
        title: "Book 06-18-2022 18.12",
        link: "https://t.me/c/2059242652/1204",
        category: "Other"
    },
    {
        title: "ඔබේ රැදු නෙත්සර",
        author: "රැවනි ලියන්ගොල්ල",
        link: "https://t.me/c/2059242652/1203",
        category: "Originals"
    },
    {
        title: "Oba Pasaloswaka",
        link: "https://t.me/c/2059242652/1201",
        category: "Originals"
    },
    {
        title: "Iratte",
        link: "https://t.me/c/2059242652/1200",
        category: "Originals"
    },
    {
        title: "Heena Hathak 02",
        link: "https://t.me/c/2059242652/1199",
        category: "Originals"
    },

];

// Make the pdfData available in Node.js (for split_data.js) without breaking browser compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { pdfData };
}