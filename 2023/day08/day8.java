import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Collections;

public class day8{
    public static int part1(String lines){
        String[] split_arr = lines.split("\n\n");
        String[] temp_split = new String[2];
        String instructions = split_arr[0];
        HashMap<String, String[]> nodes = new HashMap<String, String[]>();
        split_arr = split_arr[1].split("\n");

        for(String line: split_arr){
            temp_split = line.split(" = ");
            temp_split[1] = temp_split[1].replaceAll("\\(|\\)" , "");
            nodes.put(temp_split[0], temp_split[1].split(", "));
        }
        return walking(nodes, instructions);
    }

    public static long part2(String lines){
        String[] split_arr = lines.split("\n\n");
        String[] temp_split = new String[2];
        String instructions = split_arr[0];
        ArrayList<String> a_occurrence = new ArrayList<String>();
        int count_A = 0;
        split_arr = split_arr[1].split("\n");
        HashMap<String, String[]> nodes = new HashMap<String, String[]>();

        //Need to find how many As are at index 2 in splitarr
        for(String row : split_arr){
            if(Character.valueOf(row.charAt(2)).equals('A')){
                count_A += 1;
                temp_split = row.split(" = ");
                a_occurrence.add(temp_split[0]);
            }
        }
        //Create hashmap of the nodes
        for(String line: split_arr){
            temp_split = line.split(" = ");
            temp_split[1] = temp_split[1].replaceAll("\\(|\\)" , "");
            nodes.put(temp_split[0], temp_split[1].split(", "));
        }

        return walking_multiple(nodes, instructions, count_A, a_occurrence);
    }

    public static int walking(HashMap<String, String[]> nodes, String instructions){
        int steps = 0;
        int index = 0;
        boolean found = false;
        String node = "AAA";
        String[] step = nodes.get("AAA");

        while(!found){
            // System.out.println(node + " " + step[0] + " " + step[1]);
            if(index == instructions.length()){
                index -= instructions.length();
            }
            if(Character.valueOf(instructions.charAt(index)).equals('L')){
                node = nodes.get(node)[0];
                step = nodes.get(node);
            }
            else{
                node = nodes.get(node)[1];
                step = nodes.get(node);
            }
            index += 1;
            steps += 1;
            if(node.equals("ZZZ")){
                found = true;
            }
        }
        return steps;
    }

    public static long walking_multiple(HashMap<String, String[]> nodes, String instructions, int count_A, ArrayList<String> a_occurrence){
        int step = 0;
        int index = 0;
        int z_count = 0;
        boolean found = false;
        ArrayList<String> nodes_taken = a_occurrence;
        ArrayList<Integer> steps = new ArrayList<Integer>();

        for(int i = 0; i < nodes_taken.size(); i++){
            //Find the steps for each one
            while(!found){
                if(index == instructions.length()){
                    index -= instructions.length();
                }
                if(Character.valueOf(instructions.charAt(index)).equals('L')){
                    nodes_taken.set(i, nodes.get(nodes_taken.get(i))[0]);
                }
                else{
                    nodes_taken.set(i, nodes.get(nodes_taken.get(i))[1]);
                }

                step += 1;
                index += 1;

                if(Character.valueOf(nodes_taken.get(i).charAt(2)).equals('Z')){
                    found = true;
                }
            }

            steps.add(step);
            step = 0;
            index = 0;
            found = false;
        }

        //Call lcm until all called
        int index_c = 2;
        long lcm = LCM(steps.get(0), steps.get(1));

        while(index_c < steps.size()){
            lcm = LCM(lcm, steps.get(index_c));
            index_c += 1;
        }

        return lcm;
    }

    public static long LCM(long a, int b) {
        return (a * b) / GCF(a, b);
    }

    public static long GCF(long a, long b) {
        if (b == 0) {
            return a;
        } else {
            return (GCF(b, a % b));
        }
    }

    public static String reading(){
        String data = "";
        try{
            File myObj = new File("day8.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                data += myReader.nextLine() + "\n";
            }
            myReader.close();
        }
        catch (FileNotFoundException e){
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return data;
    }

    public static void main(String[] args){
        String lines = reading();
        System.out.println("Part 1: " + part1(lines));
        System.out.println("Part 2: " + part2(lines));
    }
}