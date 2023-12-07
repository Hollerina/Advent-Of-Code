class day4{
    public static int Part1(string[] lines){
        //Split on ": " to get the game card separate from the numbers and then split on " | " to get a set of winning vs actual numbers
        string[] games = [];
        string[] numbers = [];
        string[] winning_nums = [];
        string[] my_nums = [];
        int output = 0;
        int score_game = 0;
        for(int i =0; i < lines.Length; i++){
            games = lines[i].Split(": ");
            numbers = games[1].Split(" | ");
            winning_nums = numbers[0].Split(" ");
            my_nums = numbers[1].Split(" ");

            foreach(string value in my_nums){

                if(winning_nums.Contains(value) && value != ""){
                    if(score_game == 0){
                        score_game = 1;
                    }
                    else{
                        score_game *= 2;
                    }
                }
            }
            output += score_game;
            score_game = 0;
        }
        return output;
    }

    public static int Part2(string[] lines){
        List<int> cards = new List<int>(Enumerable.Repeat(1, lines.Length));

        string[] games = [];
        string[] numbers = [];
        string[] winning_nums = [];
        string[] my_nums = [];
        int output = 0;
        int winning_found = 0;
        for(int i = 0; i < lines.Length; i++){
            games = lines[i].Split(": ");
            numbers = games[1].Split(" | ");
            winning_nums = numbers[0].Split(" ");
            my_nums = numbers[1].Split(" ");

            foreach(string value in my_nums){
                if(winning_nums.Contains(value) && value != ""){
                    winning_found += 1;
                }
            }
            for(int j = i + 1; j <= i + winning_found; j++){
                cards[j] += cards[i];
            }
            winning_found = 0;
        }

        foreach(int element in cards){
            output += element;
        }
        return output;
    }

    public static void Main(string[] args){
        string[] lines = File.ReadAllLines("day4.txt");
        Console.WriteLine("Part 1: " + Part1(lines));
        Console.WriteLine("Part 2: " + Part2(lines));
    }
}
