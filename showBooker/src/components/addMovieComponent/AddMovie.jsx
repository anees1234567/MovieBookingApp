import { Button, Input, Stack } from "@chakra-ui/react"
import { Field } from "../../components/ui/field"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { AddMovieService } from "../../services/services"
const Addmovie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const {mutate}=useMutation({
    mutationFn:AddMovieService,
    onSuccess:()=>{
        alert("Movie Added succesfully")
    }
  })

 const onsubmit=(data)=>{
    mutate(data)
 }

  return (
    <div className="flex w-full justify-center "  >
        <form onSubmit={handleSubmit(onsubmit)}>
          <Stack gap="4"  align="flex-start">
            <Field
                style={{border: "2px"}}
              label="Movie name"
              invalid={!!errors.movieName}
              
              errorText={errors.movieName?.message}
            >
              <Input
                {...register("movieName", { required: "Movie name is required" })}
              />
            </Field>
            <Field
              label="description"
              invalid={!!errors.details}
              errorText={errors.details?.message}
            >
              <Input
                {...register("details", { required: "description is required" })}
              />
            </Field>
            <Field
              label="image URL"
              invalid={!!errors.img}
              errorText={errors.img?.message}
            >
              <Input
                {...register("img", { required: "url is required" })}
              />
            </Field>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
    </div>
  )
}
export default Addmovie
