export const handleLogin = async (user) => {
    try {
        const res = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!res.ok) {
            throw new Error("HTTP error!");
        }

        const data = await res.json();
        console.log(data);
        return true; 
    } catch (err) {
        console.error(err);
        return false; 
    }
}
