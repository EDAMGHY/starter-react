import { IFileElement, IInputFile } from "@/types"
import clsx from "clsx"
import { Ref, forwardRef, useState } from "react"
import { FiUploadCloud } from "react-icons/fi"

export const InputFile = forwardRef(
  (
    { label, name, hasError, errorMessage, onChange, ...rest }: IInputFile,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <div className="w-full relative mb-4">
        {label && (
          <label
            className="inline-block mb-2 font-sans capitalize text-primary"
            htmlFor={name}
          >
            {label}
          </label>
        )}

        <FileElement ref={ref} name={name} onChange={onChange} {...rest} />

        {hasError && errorMessage && (
          <p
            className={clsx(
              "absolute -bottom-5 left-0 text-error text-xs font-normal inline-block",
            )}
          >
            {errorMessage}
          </p>
        )}
      </div>
    )
  },
)

const FileElement = forwardRef(
  ({ name, onChange, ...rest }: IFileElement, ref: Ref<HTMLInputElement>) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [error, setError] = useState(null)

    const handleSelectedFile = event => {
      const selectedFile = event?.target?.files[0]

      if (!selectedFile) {
        setError("It Seems, The File is corrupted Please Try uploading again.")
        return
      }

      if (!isImageFile(selectedFile)) {
        setError("The files should be one of these PNG, JPG, JPEG or GIF")
        return
      }

      if (!isFileSizeValid(selectedFile)) {
        setError("The File size should be less than 2MB")
        return
      }

      setError(null)
      setSelectedFile(selectedFile)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(selectedFile)
    }

    const isImageFile = file => {
      const acceptedImageTypes = [
        "image/jpg",
        "image/svg",
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/bmp",
      ]

      return file && acceptedImageTypes.includes(file.type)
    }

    const isFileSizeValid = file => {
      // Set the maximum file size limit to 2MB (2 * 1024 * 1024 bytes)
      const maxSizeInBytes = 2 * 1024 * 1024

      return file && file.size <= maxSizeInBytes
    }

    return (
      <div className="relative flex items-center justify-center w-full">
        <label
          htmlFor={name}
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-primary border-dashed rounded-lg cursor-pointer bg-secondary hover:bg-secondary/60"
        >
          {error ? (
            <p className="text-sm text-center text-error ">{error}</p>
          ) : (
            <>
              {preview ? (
                <img
                  src={preview}
                  alt={selectedFile?.name || name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <>
                    <FiUploadCloud className="w-8 h-8 mb-4 text-primary " />
                    <p className="mb-2 text-sm text-primary ">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-primary">
                      PNG, JPG, JPEG or GIF (MAX. 2MB)
                    </p>
                  </>
                </div>
              )}
            </>
          )}

          <input
            ref={ref}
            id={name}
            name={name}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={e => {
              onChange(e)
              handleSelectedFile(e)
            }}
            {...rest}
          />
        </label>
      </div>
    )
  },
)
