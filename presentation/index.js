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
  Text
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
  babel: require("../assets/babel.png"),
  removePropTypes: require("../assets/removePropTypes.png"),
  babelLodash: require("../assets/babelLodash.png")
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
          <Image
            src={images.babel.replace("/", "")}
            margin="40px auto 60px"
            height="200px"
          />
          <Heading size={1} caps fit textColor="secondary">
            🕵️‍ Writing Custom <span style={{ color: "#01AAFF" }}>Babel</span>{" "}
            Plugins
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
                  What is <span style={{ color: "#01AAFF" }}>Babel</span> and
                  why do we need it.
                </ListItem>
              </Appear>
              <br />
              <br />
              <Appear fid="3">
                <ListItem textColor="secondary">
                  Practical demo for transpiling code using{" "}
                  <span style={{ color: "#01AAFF" }}>AST and Babel</span>
                </ListItem>
              </Appear>
              <br />
              <br />
            </List>
            <Appear fid="4">
              <Text textColor="white">
                <Image
                  src={images.disclaimer.replace("/", "")}
                  margin="40px auto 60px"
                  height="100px"
                />
                This talk is not a deep dive on parsing, tokenizing and lexing
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
            Why do we need babel?
          </Heading>
          <br />
          <br />
          <List>
            <Appear fid="1">
              <ListItem textColor="secondary">
                To use next generation javascript features
              </ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="2">
              <ListItem textColor="secondary">
                To transpile JSX used in React
              </ListItem>
            </Appear>
            <br />
            <br />
            <Appear fid="3">
              <ListItem textColor="secondary">
                To add polyfills for older browsers
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
          <Text textSize="1.5em" caps lineHeight={1} textColor="primary">
            babel-plugin-lodash
          </Text>
          <br />
          <br />
          <Image
            src={images.babelLodash.replace("/", "")}
            margin="40px auto 60px"
          />
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Text textSize="1.5em" caps lineHeight={1} textColor="primary">
            babel-plugin-transform-react-remove-prop-types
          </Text>
          <br />
          <br />
          <Image
            src={images.removePropTypes.replace("/", "")}
            margin="40px auto 60px"
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} textColor="primary">
            Demo
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
            What is a .babelrc file?
          </Heading>
          <br />
          <br />
          <Text textSize="1.5em" textColor="secondary">
            It's a file to specify your babel presets and plugins
          </Text>
        </Slide>
        <Slide
          transition={["slide"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Text textSize="1.5em" textColor="secondary">
            Sample .babelrc file
          </Text>
          <br />
          <br />
          <CodePane
            lang="js"
            theme="external"
            source={require("raw-loader!../assets/babelrc.example")}
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} textColor="primary">
            Babel Presets?
          </Heading>
          <br />
          <br />
          <Text textSize="1.5em" textColor="secondary">
            Array of babel plugins
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.city.replace("/", "")}
          bgDarken={1}
        >
          <Heading size={4} textColor="primary">
            Order of execution
          </Heading>
          <br />
          <br />
          <Appear fid="2">
            <Text textSize="1.5em" textColor="secondary">
              Babel plugins are executed first in top to bottom
            </Text>
          </Appear>
          <Appear fid="2">
            <Text textSize="1.5em" textColor="secondary">
              Babel presets are executed in the reverse order from bottom to top
            </Text>
          </Appear>
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
                href="https://github.com/jamiebuilds/babel-handbook"
                textColor="secondary"
              >
                Babel handbook
              </Link>
            </ListItem>
            <br />
            <br />
            <ListItem textColor="secondary">
              <Link
                href="https://www.sitepoint.com/understanding-asts-building-babel-plugin/"
                textColor="secondary"
              >
                Understanding-asts-building-babel-plugin
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
