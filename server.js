const express = require("express");
const bodyParser = require("body-parser");
const { execSync } = require("child_process");
const cors = require("cors");

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

app.use(bodyParser.json());

app.post("/execute", (req, res) => {
    const { code } = req.body;
    const level = req.headers.level;

    console.log(`executing java code : ${code}`);

    function addIplusplusToEveryLine(javaCode) {
        // Split the Java code into lines.
        const lines = javaCode.split("\n");
      
        // Iterate over the lines and add `i++;` to the end of each line.
        const updatedLines = lines.map((line) => {
          // Ignore empty lines and comment lines.
          if (line != null && !line.startsWith("//") && line.endsWith("{")) {
            return line + " iterationCounterADMINONLY++;";
          } else {
            return line;
          }
        });
      
        // Combine the lines back into a single string.
        return updatedLines.join("\n");
      }
      
      const updatedJavaCode = addIplusplusToEveryLine(code);

    try {
        // Save the Java code to a temporary file
        const javaCode = `public class CodeExecutor {
    private static int iterationCounterADMINONLY = 0;
    public static Object code(String data){
        ${updatedJavaCode}
    }

    public static Object solution(String test) {
        return Ex${level}.solution(test);
    }

    public static int getIteration(){
        return iterationCounterADMINONLY/2;
    }
}
        `;

        require("fs").writeFileSync("CodeExecutor.java", javaCode);
        execSync("javac CodeExecutor.java 2>&1", { encoding: "utf-8" });

        // Compile and execute the Java code
        const compileOutput = execSync(`javac Ex${level}.java 2>&1`, { encoding: "utf-8" });
        if (compileOutput) {
            res.status(500).send("Error compiling Java code:\n" + compileOutput);
            return;
        }

        const executionOutput = execSync(`java Ex${level} 2>&1`, { encoding: "utf-8" });
        res.send(executionOutput);
    } catch (error) {
        // res.status(500).send('Error executing Java code');
        res.status(500).send(error);
        console.error("Java execution error:", error);
    }
});


app.use(express.static("public")); // Serve static files (HTML, CSS, JS) from the "public" folder

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
