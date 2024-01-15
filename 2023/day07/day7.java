import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Set;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.Collections;

public class day7{
    public static int part1(ArrayList<String> lines){
        //Create a hashmap which will store the position in the array of the first of each type of hand.
        HashMap<String, ArrayList<String>> indexCards = new HashMap<String, ArrayList<String>>();
        int sum = 0;
        //Set initial values 
        indexCards.put("Five", new ArrayList<String>());
        indexCards.put("Four", new ArrayList<String>());
        indexCards.put("Full", new ArrayList<String>());
        indexCards.put("Three", new ArrayList<String>());
        indexCards.put("Two", new ArrayList<String>());
        indexCards.put("Pair", new ArrayList<String>());
        indexCards.put("High", new ArrayList<String>());
        String[] types = new String[]{"High","Pair","Two","Three","Full","Four","Five"};
        HashMap<Character, Integer> conversion = new HashMap<Character, Integer>();
        conversion.put('T', 10);
        conversion.put('J', 11);
        conversion.put('Q', 12);
        conversion.put('K', 13);
        conversion.put('A', 14);

        //Loop through each line and decide which arraylist to update. Sort after to create big list
        for(String line : lines){
            String[] splitLine = line.split(" ");      
            Set<String> ints = new HashSet<>(Arrays.stream(splitLine[0].split(""))
                                                                .collect(Collectors.toList()));
            //Set doesn't contain any repeats. Can check the length
            if(ints.size() == 1){
                //Will be five of a kind
                indexCards.put("Five", sorting(indexCards.get("Five"), line, conversion));
            }
            else if(ints.size() == 2){
                //Can either be Four of a kind or Full house. Take one of the values in the set and count its occurrences
                if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 3 || splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 2){
                    indexCards.put("Full", sorting(indexCards.get("Full"), line, conversion));
                }
                else{
                    indexCards.put("Four", sorting(indexCards.get("Four"), line, conversion));
                }
            }
            else if(ints.size() == 3){
                //3 unique values and therefore must be either two pairs or three of a kind               
                if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 1 && splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(1)).count() == 1){
                    indexCards.put("Three", sorting(indexCards.get("Three"), line, conversion));
                }
                else if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 1){
                    if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(1)).count() == 3){
                        indexCards.put("Three", sorting(indexCards.get("Three"), line, conversion));
                    }
                    else{
                        indexCards.put("Two", sorting(indexCards.get("Two"), line, conversion));
                    }
                }
                else if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 3){
                    indexCards.put("Three", sorting(indexCards.get("Three"), line, conversion));
                }
                else{
                    indexCards.put("Two",sorting(indexCards.get("Two"), line, conversion));
                }
            }
            else if(ints.size() == 4){
                indexCards.put("Pair",sorting(indexCards.get("Pair"), line, conversion));
            }
            else{
                indexCards.put("High",sorting(indexCards.get("High"), line, conversion));
            }
        }
        int multiply = 1;

        for(String type:types){
            for(int i = 0 ; i < indexCards.get(type).size(); i++){
                String[] split = indexCards.get(type).get(i).split(" ");
                sum += (multiply * Integer.parseInt(split[1]));
                multiply += 1;
            }
        }
        return sum;
    }

    public static int part2(ArrayList<String> lines){
        HashMap<String, ArrayList<String>> indexCards = new HashMap<String, ArrayList<String>>();
        int sum = 0;
        long j_count = 0;
        indexCards.put("Five", new ArrayList<String>());
        indexCards.put("Four", new ArrayList<String>());
        indexCards.put("Full", new ArrayList<String>());
        indexCards.put("Three", new ArrayList<String>());
        indexCards.put("Two", new ArrayList<String>());
        indexCards.put("Pair", new ArrayList<String>());
        indexCards.put("High", new ArrayList<String>());
        String[] types = new String[]{"High","Pair","Two","Three","Full","Four","Five"};
        HashMap<Character, Integer> conversion = new HashMap<Character, Integer>();
        conversion.put('T', 10);
        conversion.put('J', 1);
        conversion.put('Q', 12);
        conversion.put('K', 13);
        conversion.put('A', 14);

        for(String line : lines){
            String[] splitLine = line.split(" ");      
            Set<String> ints = new HashSet<>(Arrays.stream(splitLine[0].split(""))
                                                                .collect(Collectors.toList()));

            //Need to check how many Js it contains
            if(ints.contains("J")){
                j_count = splitLine[0].chars().filter(ch -> ch == 'J').count();
            }
            else{
                j_count = 0;
            }

            if(ints.size() == 5){
                if(j_count == 0){
                    indexCards.put("High",sorting(indexCards.get("High"), line, conversion));
                }
                else{
                    indexCards.put("Pair",sorting(indexCards.get("Pair"), line, conversion));
                }
            }
            else if(ints.size() == 4){
                if(j_count == 0){
                    indexCards.put("Pair",sorting(indexCards.get("Pair"), line, conversion));
                }
                else{
                    indexCards.put("Three", sorting(indexCards.get("Three"), line, conversion));
                }
            }
            else if(ints.size() == 3){
                if(j_count == 3 || j_count == 2 ){
                    indexCards.put("Four", sorting(indexCards.get("Four"), line, conversion));
                }
                else if(j_count == 1){
                    if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 1 && (splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(1)).count() == 1)){
                        indexCards.put("Four", sorting(indexCards.get("Four"), line, conversion));
                    }
                    else if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 1){
                        if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(1)).count() == 3){
                            indexCards.put("Four", sorting(indexCards.get("Four"), line, conversion));
                        }
                        else{
                            indexCards.put("Full", sorting(indexCards.get("Full"), line, conversion));
                        }
                    }
                    else if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 3){
                        indexCards.put("Four", sorting(indexCards.get("Four"), line, conversion));
                    }
                    else{
                        indexCards.put("Full", sorting(indexCards.get("Full"), line, conversion));
                    }
                }
                else if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 1 && (splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(1)).count() == 1)){
                    indexCards.put("Three", sorting(indexCards.get("Three"), line, conversion));
                }
                else if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 1){
                    if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(1)).count() == 3){
                        indexCards.put("Three", sorting(indexCards.get("Three"), line, conversion));
                    }
                    else{
                        indexCards.put("Two",sorting(indexCards.get("Two"), line, conversion));
                    }                      
                }
                else if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 3){
                    indexCards.put("Three", sorting(indexCards.get("Three"), line, conversion));
                }
                else{
                    indexCards.put("Two",sorting(indexCards.get("Two"), line, conversion));
                }
            }
            else if(ints.size() == 2){
                if(j_count != 0){
                    indexCards.put("Five", sorting(indexCards.get("Five"), line, conversion));
                }
                else{
                    if(splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 4 || splitLine[0].chars().filter(ch -> ch == (char)splitLine[0].charAt(0)).count() == 1){
                        indexCards.put("Four", sorting(indexCards.get("Four"), line, conversion));
                    }
                    else{
                        indexCards.put("Full", sorting(indexCards.get("Full"), line, conversion));
                    }
                }
            }
            else{
                indexCards.put("Five", sorting(indexCards.get("Five"), line, conversion));
            }
        }

        int multiply = 1;

        for(String type:types){
            for(int i = 0 ; i < indexCards.get(type).size(); i++){
                String[] split = indexCards.get(type).get(i).split(" ");
                sum += (multiply * Integer.parseInt(split[1]));
                multiply += 1;
            }
        }

        return sum;
    }

    public static ArrayList<String> sorting(ArrayList<String> type_arr, String line, HashMap<Character, Integer> conversion){
        //Loop through the given array list to determine where to place
        if(type_arr.size() == 0){
            type_arr.add(line);
            return type_arr;
        }
        boolean found = false;
        int index = 0;
        int compare_index = 0;
        int firstNum = 0;
        int secondNum = 0;
        String pastValue = "";

        while(!found){
            for(int i = index; i < type_arr.size(); i++){

                //Using compare index if same then need to move up to next comparison
                if(type_arr.get(i).charAt(compare_index) == line.charAt(compare_index)){
                    pastValue += String.valueOf(line.charAt(compare_index));
                    compare_index += 1;
                    index = i; 
                    break;
                }
                
                if(!type_arr.get(i).substring(0, pastValue.length()).equals(pastValue)){
                    type_arr.add(i, line);  
                    found = true;
                    break;
                }

                //Find the number values of both comparison
                if(conversion.containsKey(type_arr.get(i).charAt(compare_index))){
                    firstNum = conversion.get(type_arr.get(i).charAt(compare_index));
                }
                else{
                    firstNum = Character.getNumericValue(type_arr.get(i).charAt(compare_index));
                }

                if(conversion.containsKey(line.charAt(compare_index))){
                    secondNum = conversion.get(line.charAt(compare_index));
                }
                else{
                    secondNum = Character.getNumericValue(line.charAt(compare_index));
                }
                //Compare the numbers
                if(firstNum > secondNum){
                    //IF the first number is smaller than whats in the array already then must be placed before
                    type_arr.add(i, line);  
                    found = true;
                    break;
                }
                if(compare_index == 4){
                    type_arr.add(i + 1, line);
                    found = true;
                    break;
                }
                if(i == type_arr.size() - 1){
                    type_arr.add(line);
                    found = true;
                    break;
                }
            }
        }

        return type_arr;
    }

    public static ArrayList<String> reading(){
        ArrayList<String> data = new ArrayList<String>();
        try{
            File myObj = new File("day7.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                data.add(myReader.nextLine());
            }
            myReader.close();
        }
        catch (FileNotFoundException e){
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return data;
    }

    public static void main(String args[]){
        ArrayList<String> lines = reading();
        System.out.println("Part 1: " + part1(lines));
        System.out.println("Part 2: " + part2(lines));
    }
}