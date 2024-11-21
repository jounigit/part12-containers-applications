import axios from "axios";
import { useState } from "react";

export const Upload = () => {
    const [file, setFile] = useState<File>();

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e
        if (!file) return;
        const formData = new FormData();
        formData.append('image', file);

        const result = await axios.post(
            'http://localhost:3001/api/pictures/upload',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                    }
        )
        console.log(result.data);
    }

  return (
    <div className="row">
            <form onSubmit={(e) => submit(e)}>
                <input
                    onChange={e => setFile(e.target.files?.[0] )}
                    type="file"
                    accept="image/*"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
  )
}
