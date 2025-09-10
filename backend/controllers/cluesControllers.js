import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const {data, error} = await supabase
  .from("trivia_clues")
  .select("*")
  .limit(5)

console.log(`test: ${error.hint}`)

// Round array: contains 5 categories and 5 clues from each category
const count = 529938; // Number of clues 

let round = [];
let categories = [];


// This file contains controllers the allow you to use the API

// This function obtains 5 random categories from the database
export const getCategories = async (req, res) => {
  try {

    for (let i = 0; i < 5; i++) {
      const randomOffset = Math.floor(Math.random() * count);
      const { data, error } = await supabase
        .from("trivia_clues")
        .select("category")
        .range(0, 0)

      if (error) {
        console.error("Supabase error:", error);
        return res.status(500).json({ success: false, message: "Database query failed", });
      }

      if (!data || data.length === 0) {
        return res.status(404).json({ success: false, message: "No categories were found", });
      }
      categories.push(data[0]);
    }

    res.status(200).json({ success: true, data: categories });

  } catch (error) {
    console.log("Error in getCategories function", error);
    res.status(500).json({ success: false, message: "Database query failed" });
  }
}



export const getClue = async (req, res) => {
  try {

    //Fetches one clue from "clues" table
    const { data, error } = await supabase
      .from("trivia_clues")
      .select("*")
      .limit(1)
     
    
    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({
        success: false,
        message: "Database query failed",
      });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No clues found",
      });
    }

    res.status(200).json({ success: true, data: data });

  } catch (error) {
    console.log("Error in getClue function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}