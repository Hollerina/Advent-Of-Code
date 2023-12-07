//Read in the file into an array
class day3{

    public static int Part1(string[] lines){
        List<List<int>> special_pos = find_specials(lines, true);
        int sum = 0;

        foreach(List<int> array in special_pos){
            if(int.TryParse(lines[array[0] - 1][array[1] - 1].ToString(), out _)){
                sum += find_numbers(lines[array[0] - 1], array[1] - 1);
            }
            if(int.TryParse(lines[array[0] - 1][array[1]].ToString(), out _) && !int.TryParse(lines[array[0] - 1][array[1] - 1].ToString(), out _)){
                sum += find_numbers(lines[array[0] - 1], array[1]);
            }
            if(int.TryParse(lines[array[0] - 1][array[1] + 1].ToString(), out _) && !int.TryParse(lines[array[0] - 1][array[1]].ToString(), out _)){
                sum += find_numbers(lines[array[0] - 1] , array[1] + 1);
            }
            if(int.TryParse(lines[array[0]][array[1] - 1].ToString(), out _)){
                sum += find_numbers(lines[array[0]], array[1] - 1);
            }
            if(int.TryParse(lines[array[0]][array[1] + 1].ToString(), out _)){
                sum += find_numbers(lines[array[0]], array[1] + 1);
            }
            if(int.TryParse(lines[array[0] + 1][array[1] - 1].ToString(), out _)){
                sum += find_numbers(lines[array[0] + 1], array[1] - 1);
            }
            if(int.TryParse(lines[array[0] + 1][array[1]].ToString(), out _) && !int.TryParse(lines[array[0] + 1][array[1] - 1].ToString(), out _)){
                sum += find_numbers(lines[array[0] + 1], array[1]);
            }
            if(int.TryParse(lines[array[0] + 1][array[1] + 1].ToString(), out _) && !int.TryParse(lines[array[0] + 1][array[1]].ToString(), out _)){
                sum += find_numbers(lines[array[0] + 1], array[1] + 1);
            }
        }
        return sum;
    }

    public static int Part2(string[] lines){
        List<List<int>> special_pos = find_specials(lines, false);
        int multiplication = 1;
        int sum = 0;
        int count_gearnum = 0;

        foreach(List<int> array in special_pos){
            if(int.TryParse(lines[array[0] - 1][array[1] - 1].ToString(), out _)){
                multiplication *= find_numbers(lines[array[0] - 1], array[1] - 1);
                count_gearnum += 1;
            }
            if(int.TryParse(lines[array[0] - 1][array[1]].ToString(), out _) && !int.TryParse(lines[array[0] - 1][array[1] - 1].ToString(), out _)){
                multiplication *= find_numbers(lines[array[0] - 1], array[1]);
                count_gearnum += 1;
            }
            if(int.TryParse(lines[array[0] - 1][array[1] + 1].ToString(), out _) && !int.TryParse(lines[array[0] - 1][array[1]].ToString(), out _)){
                multiplication *= find_numbers(lines[array[0] - 1] , array[1] + 1);
                count_gearnum += 1;
            }
            if(int.TryParse(lines[array[0]][array[1] - 1].ToString(), out _)){
                multiplication *= find_numbers(lines[array[0]], array[1] - 1);
                count_gearnum += 1;
            }
            if(int.TryParse(lines[array[0]][array[1] + 1].ToString(), out _)){
                multiplication *= find_numbers(lines[array[0]], array[1] + 1);
                count_gearnum += 1;
            }
            if(int.TryParse(lines[array[0] + 1][array[1] - 1].ToString(), out _)){
                multiplication *= find_numbers(lines[array[0] + 1], array[1] - 1);
                count_gearnum += 1;
            }
            if(int.TryParse(lines[array[0] + 1][array[1]].ToString(), out _) && !int.TryParse(lines[array[0] + 1][array[1] - 1].ToString(), out _)){
                multiplication *= find_numbers(lines[array[0] + 1], array[1]);
                count_gearnum += 1;
            }
            if(int.TryParse(lines[array[0] + 1][array[1] + 1].ToString(), out _) && !int.TryParse(lines[array[0] + 1][array[1]].ToString(), out _)){
                multiplication *= find_numbers(lines[array[0] + 1], array[1] + 1);
                count_gearnum += 1;
            }

            if(count_gearnum == 2){
                sum += multiplication;
            }
            multiplication = 1;
            count_gearnum = 0;
        }
        return sum;
    }

    public static List<List<int>> find_specials(string[] lines, bool part1){
        List<List<int>> special_pos = new List<List<int>>();
        for(int i = 0; i < lines.Length; i++){
            for(int j = 0; j < lines[i].Length; j++){
                if(part1){
                    if(!int.TryParse(lines[i][j].ToString(), out _) && lines[i][j].ToString() != "."){
                        special_pos.Add(new List<int>(){
                            i,
                            j
                        });
                    }
                }
                else{
                    if(lines[i][j].ToString() == "*"){
                        special_pos.Add(new List<int>(){
                            i,
                            j
                        });

                    }
                }
            }
        }

        return special_pos;
    }
    public static int find_numbers(string row, int index){
        //Find the number in the array
        bool found = false;
        string number = "";
        int res = 0;

        for(int i = 0; i < row.Length; i++){
            if(int.TryParse(row[i].ToString() , out _)){
                number += row[i].ToString();
                if(i == index){
                    found = true;
                }
            }
            else{
                if(found){
                    //Then return the number to sum
                    int.TryParse(number.ToString(), out res);
                    return res;
                }
                else{
                    //Not found number reset it
                    number = "";
                }
            }
        }
        int.TryParse(number.ToString(), out res);
        return res;
    }
    public static void Main(string[] args){
        string[] lines = File.ReadAllLines("day3.txt");
        Console.WriteLine("Part 1: " + Part1(lines));
        Console.WriteLine("Part 2: " + Part2(lines)); 
    }
}





