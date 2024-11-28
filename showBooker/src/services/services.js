import axios from "axios"

export const getAllMovies= async()=>{
    try {
         const result= await axios.get("https://moviebookingserver-h6dr.onrender.com/getAllMovies")
         return result.data
    } catch (error) {
        return {
            message:"error in fecthing Movies",
            responseIndicator:"failed"
        }
    }
}

export const bookMovieService=async(data)=>{
     try {
        const result= await axios.post("https://moviebookingserver-h6dr.onrender.com/bookMovie",data)
        return result.data
   } catch (error) {
       return {
           message:"error in fecthing Movies",
           responseIndicator:"failed"
       }
}

}


export const AddMovieService=async(data)=>{
    try {
       const result= await axios.post("https://moviebookingserver-h6dr.onrender.com/AddMovies",data)
       return result.data
  } catch (error) {
      return {
          message:"error in fecthing Movies",
          responseIndicator:"failed"
      }
}
}