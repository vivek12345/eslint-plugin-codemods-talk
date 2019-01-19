// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Text,
  BlockQuote
} from "spectacle";

import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import { theme } from "./theme";

// Import custom component

// Require CSS
require("normalize.css");

const images = {
  astCode: require("../assets/astCode.png"),
  astExplorer: require("../assets/astExplorer.png"),
  babelSteps: require("../assets/babelSteps.png"),
  disclaimer: require("../assets/disclaimer.jpg"),
  city: require("../assets/tslogo.svg"),
  logo: require("../assets/logo.svg"),
  eslint: require("../assets/eslint-custom.png"),
  removePropTypes: require("../assets/removePropTypes.png"),
  babelLodash: require("../assets/babelLodash.png"),
  eslintRulesImage: require("../assets/eslint-rules-image.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        transit
        progress={"number"}
        transition={["slide"]}
        transitionDuration={500}
        contentWidth={1600}
        contentHeight={900}
      >
        <Slide
          transition={[]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={1} caps fit textColor="secondary">
            🕵️‍ Writing Custom <span style={{ color: "#01AAFF" }}>Eslint</span>{" "}
            Plugins and <span style={{ color: "#01AAFF" }}>codemods</span>
          </Heading>
        </Slide>
        <Slide
          transition={[]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading caps textColor="primary">
            About Me
          </Heading>

          <Appear fid="1">
            <div>
              <div>
                <Text
                  textSize="2em"
                  margin="20px 0px 0px"
                  bold
                  textColor="secondary"
                >
                  Vivek Nayyar
                </Text>
                <br />
              </div>
              <Image
                src={images.logo.replace("/", "")}
                margin="40px auto 60px"
                height="100px"
              />
            </div>
          </Appear>
          <Appear fid="2">
            <div>
              <Text
                textSize="1em"
                margin="20px 0px 0px"
                bold
                textColor="secondary"
              >
                Twitter: @viveknayyar09
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={1} caps textColor="secondary">
            What this talk is about
          </Heading>
          <br />
          <br />
          <div>
            <List>
              <Appear fid="1">
                <ListItem textColor="secondary">
                  Introduction to concepts of{" "}
                  <span style={{ color: "#01AAFF" }}>AST.</span>
                </ListItem>
              </Appear>
              <br />
              <br />
              <Appear fid="2">
                <ListItem textColor="secondary">
                  What is <span style={{ color: "#01AAFF" }}>ESLINT</span> and
                  why do we need it?
                </ListItem>
              </Appear>
              <br />
              <br />
              <Appear fid="2">
                <ListItem textColor="secondary">
                  What are the other{" "}
                  <span style={{ color: "#01AAFF" }}>JS-Linters</span>{" "}
                  available?
                </ListItem>
              </Appear>
              <br />
              <br />
              <Appear fid="3">
                <ListItem textColor="secondary">
                  Demo writing few eslint plugins and codemods using{" "}
                  <span style={{ color: "#01AAFF" }}>Espree </span>
                  and
                  <span style={{ color: "#01AAFF" }}> jscodeshift</span>
                </ListItem>
              </Appear>
            </List>
            <Appear fid="4">
              <Text textColor="white">
                <Image
                  src={images.disclaimer.replace("/", "")}
                  margin="40px auto 60px"
                  height="100px"
                />
                This talk is not a deep dive on parsing, tokenizing and lexical
                scoping
              </Text>
            </Appear>
          </div>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is an <span style={{ color: "#01AAFF" }}> AST?</span>
          </Heading>
          <br />
          <br />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            What you see?
          </Heading>
          <br />
          <br />
          <CodePane
            lang="js"
            theme="external"
            source={require("raw-loader!../assets/jsCode.example")}
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Text textSize="1.5em" textColor="secondary">
            What the computer get's is this.
          </Text>
          <CodePane
            lang="js"
            theme="external"
            source={require("raw-loader!../assets/astCode.example")}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Image
            src={images.astCode.replace("/", "")}
            margin="40px auto 60px"
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={1} caps textColor="secondary">
            Stages of any Compiler
          </Heading>
          <br />
          <br />
          <div>
            <List>
              <Appear fid="1">
                <ListItem textColor="secondary">
                  <span style={{ color: "#01AAFF" }}>PARSE</span> code to AST
                </ListItem>
              </Appear>
              <br />
              <br />
              <Appear fid="2">
                <ListItem textColor="secondary">
                  <span style={{ color: "#01AAFF" }}>Tranform</span> AST to
                  another AST
                </ListItem>
              </Appear>
              <br />
              <br />
              <Appear fid="3">
                <ListItem textColor="secondary">
                  <span style={{ color: "#01AAFF" }}>GENERATE</span> AST to code
                </ListItem>
              </Appear>
              <br />
              <br />
            </List>
          </div>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Text textSize="6em" caps lineHeight={1} textColor="primary">
            PARSE
          </Text>
          <br />
          <br />
          <Appear fid="2">
            <Text textSize="1.5em" textColor="secondary">
              Turns code into tokens, and tokens into tree of nodes
            </Text>
          </Appear>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Link href="https://astexplorer.net/" textColor="primary">
            <Text textSize="1.5em" textColor="secondary">
              https://astexplorer.net/
            </Text>
          </Link>
          <Image
            src={images.astExplorer.replace("/", "")}
            margin="40px auto 60px"
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Text textSize="6em" caps lineHeight={1} textColor="primary">
            TRANSFORM
          </Text>
          <br />
          <br />
          <Appear fid="2">
            <Text textSize="1.5em" textColor="secondary">
              Add, Replace, edit, Remove node from the AST
            </Text>
          </Appear>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Text textSize="6em" caps lineHeight={1} textColor="primary">
            GENERATE
          </Text>
          <br />
          <br />
          <Appear fid="2">
            <Text textSize="1.5em" textColor="secondary">
              Create source code from the modified AST in the previous step
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Text textSize="6em" caps lineHeight={1} textColor="primary">
            Stages
          </Text>
          <br />
          <br />
          <Image
            src={images.babelSteps.replace("/", "")}
            margin="40px auto 60px"
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Why do we need a linter?
          </Heading>
          <br />
          <br />
          <List>
            <Appear fid="1">
              <ListItem textColor="secondary">
                Static analysis of code to find possible errors
              </ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="2">
              <ListItem textColor="secondary">
                Encourage best practices
              </ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="3">
              <ListItem textColor="secondary">
                Enforce style consistency
              </ListItem>
            </Appear>
            <br />
            <br />
          </List>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} caps lineHeight={1} textColor="primary">
            Other JS linters available to us?
          </Heading>
          <br />
          <br />
          <List>
            <Appear fid="1">
              <ListItem textColor="secondary">JSLint</ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="2">
              <ListItem textColor="secondary">JSHint</ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="3">
              <ListItem textColor="secondary">JSCS</ListItem>
            </Appear>
            <br />
            <br />
          </List>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Eslint Features
          </Heading>
          <br />
          <br />
          <List>
            <Appear fid="1">
              <ListItem textColor="secondary">
                Write your own custom rules
              </ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="2">
              <ListItem textColor="secondary">Custom formatters</ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="3">
              <ListItem textColor="secondary">Custom Parser</ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="3">
              <ListItem textColor="secondary">Turn on/off the rules</ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="3">
              <ListItem textColor="secondary">Set to warn or error</ListItem>
            </Appear>
            <br />
            <br />
          </List>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Text textSize="1.5em" textColor="secondary">
            Eslint rule on VS Code
          </Text>

          <Image
            src={images.eslintRulesImage.replace("/", "")}
            margin="40px auto 60px"
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Text textSize="1.5em" textColor="secondary">
            Eslint plugins basic Code Structure
          </Text>
          <br />
          <br />
          <CodePane
            lang="js"
            theme="external"
            source={require("raw-loader!../assets/eslintPlgin.example")}
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Text textSize="1.5em" textColor="secondary">
            Eslint Rules basic code structure
          </Text>
          <br />
          <br />
          <CodePane
            lang="js"
            theme="external"
            source={require("raw-loader!../assets/estPlugin.example")}
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Working with Rules
          </Heading>
          <br />
          <br />
          <List>
            <Appear fid="2">
              <ListItem textColor="secondary">
                Source file inside lib/rules/rule-name.js
              </ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="3">
              <ListItem textColor="secondary">
                Test file inside tests/lib/rules
              </ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="3">
              <ListItem textColor="secondary">
                A Markdown documentation file inside docs/rules
              </ListItem>
            </Appear>
            <br />
            <br />
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} textColor="primary">
            Demo on eslint plugins
          </Heading>
          <br />
          <br />
          <Link
            href="https://github.com/vivek12345/eslint-plugin-prefer-await"
            textColor="primary"
          >
            Github Repo
          </Link>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} lineHeight={1} textColor="primary">
            Using eslint plugins in your .eslintrc file
          </Heading>
          <br />
          <br />
          <List>
            <Appear fid="3">
              <CodePane
                lang="js"
                theme="external"
                source={require("raw-loader!../assets/eslintConfig.example")}
              />
            </Appear>
            <br />
            <br />
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} textColor="primary">
            What are codemods?
          </Heading>
          <br />
          <br />
          <Text textSize="1.5em" textColor="secondary">
            Codemod is a tool/library to assist you with large-scale codebase
            refactors that can be partially automated but still require human
            oversight and occasional intervention.
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} textColor="primary">
            What is jscodeshift?
          </Heading>
          <br />
          <br />
          <List>
            <Appear fid="2">
              <ListItem textColor="secondary">
                A runner, which executes the provided transform for each file
                passed to it. It also outputs a summary of how many files have
                (not) been transformed.
              </ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="2">
              <ListItem textColor="secondary">
                A wrapper around recast, providing a different API. Recast is an
                AST-to-AST transform tool and also tries to preserve the style
                of original code as much as possible.
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} textColor="primary">
            How to use jscodeshift?
          </Heading>
          <br />
          <br />
          <List>
            <Appear fid="2">
              <CodePane
                lang="js"
                theme="external"
                source={require("raw-loader!../assets/jscodeshift.example")}
              />
            </Appear>
            <br />
            <br />
          </List>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Text textSize="1.5em" textColor="secondary">
            jscodeshift basic Code Structure
          </Text>
          <br />
          <br />
          <CodePane
            lang="js"
            theme="external"
            source={require("raw-loader!../assets/codeJscodeshift.example")}
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} textColor="primary">
            Demo on codemods using jscodeshift
          </Heading>
          <br />
          <br />
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} textColor="primary">
            Resources
          </Heading>
          <br />
          <br />
          <List>
            <ListItem textColor="secondary">
              <Link
                href="https://eslint.org/docs/developer-guide/working-with-rules#contextreport"
                textColor="secondary"
              >
                Eslint Rules Documentation
              </Link>
            </ListItem>
            <br />
            <br />
            <ListItem textColor="secondary">
              <Link
                href="http://blog.cowchimp.com/writing-a-custom-eslint-rule-to-spot-undeclared-props/"
                textColor="secondary"
              >
                Writing-a-custom-eslint-rule-to-spot-undeclared-props
              </Link>
            </ListItem>
            <br />
            <br />
            <ListItem textColor="secondary">
              <Link
                href="https://github.com/facebook/jscodeshift/blob/master/src/collections/Node.js"
                textColor="secondary"
              >
                Jscodeshift all Node level api's
              </Link>
            </ListItem>
            <br />
            <br />
            <ListItem textColor="secondary">
              <Link
                href="https://github.com/facebook/jscodeshift/blob/master/src/Collection.js"
                textColor="secondary"
              >
                Jscodeshift all collection level api's
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={["slide", "spin"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading caps fit size={1} textColor="primary">
            Thank you!
          </Heading>
          <br />
          <br />
          <br />
          <Text textSize="1em" textColor="white">
            Vivek Nayyar
          </Text>
          <Image
            src={images.logo.replace("/", "")}
            margin="40px auto 60px"
            height="100px"
          />
          <Text textSize="1em" textColor="white">
            Twitter:{" "}
            <Link href="https://twitter.com/viveknayyar09" textColor="primary">
              @viveknayyar09
            </Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
