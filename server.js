const express = require("express");
const bodyParser = require("body-parser");
const { execSync } = require("child_process");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

app.use(bodyParser.json());

app.post("/execute", (req, res) => {
    const { code } = req.body;

    try {
        // Save the Java code to a temporary file
        const javaCode = `
            public class CodeExecutor {
				public static int code(String data){
					int res = 0;

					${code}

					return res;
				}
			}
        `;

        require("fs").writeFileSync("CodeExecutor.java", javaCode);

        // Compile and execute the Java code
        const compileOutput = execSync("javac Ex1.java 2>&1", { encoding: "utf-8" });
        if (compileOutput) {
            res.status(500).send("Error compiling Java code:\n" + compileOutput);
            return;
        }

        const executionOutput = execSync("java Ex1 2>&1", { encoding: "utf-8" });
        res.send(executionOutput);
    } catch (error) {
        res.status(500).send("Error executing Java code:\n" + error.message);
        console.error("Java execution error:", error);
    }
});


app.use(express.static("public")); // Serve static files (HTML, CSS, JS) from the "public" folder

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
