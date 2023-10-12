### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

JWT, or JSON Web Token, is a compact token format used for securely transmitting information between parties. It's often used in authentication systems where, after logging in, a server provides the client with a signed token. This token can then be sent with subsequent requests to prove the client's identity without needing to log in again. The token itself is composed of a header, payload, and signature.

- What is the signature portion of the JWT?  What does it do?

The signature in a JWT ensures the token's integrity and authenticity. It's a cryptographic seal generated using the header, payload, and a secret. By verifying the signature, recipients can confirm the token hasn't been altered and originates from a trusted source.

- If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, if a JWT is intercepted, the attacker can see what's inside the payload. JWTs are encoded, not encrypted. This means the content can be easily decoded to view the header and payload. However, without the appropriate secret or key, the attacker cannot tamper with the JWT and generate a valid signature.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

**Authentication with JWT**

1. User logs in, server verifies credentials.
2. Server generates and sends a JWT to the user's client.
3. Client stores the JWT and sends it in subsequent requests.
4. Server checks JWT's signature to authenticate the user for each request.
 ---
- Compare and contrast unit, integration and end-to-end tests.

- **Unit Tests**:
  - Focus on individual components or functions.
  - Ensure that each part of the software works in isolation.
  - Fast and frequently run during development.

- **Integration Tests**:
  - Examine the interactions between different parts of the software.
  - Ensure that combined units work together correctly.
  - May involve databases, APIs, or other external systems.

- **End-to-End Tests**:
  - Test the entire application as a whole.
  - Mimic real user scenarios and interactions.
  - Often slower and require a full environment setup.

---

- What is a mock? What are some things you would mock?


A **mock** is a simulated object or method used in unit testing to isolate the component being tested from its external dependencies. Mocks mimic the behavior of real objects, allowing for controlled test scenarios.

**Commonly Mocked Items**:

- External APIs to avoid real network calls.
- Database interactions to prevent actual database queries.
- Hardware interfaces for software that interacts with devices.

Using mocks ensures that tests run consistently and external factors don't influence test outcomes.

---

- What is continuous integration?

Continuous Integration (CI) is a development practice where developers frequently integrate their code changes into a central repository. After each integration, automated tests are run to detect and fix any bugs early in the development cycle. CI promotes frequent code updates, rapid feedback, and a cohesive software build process.

- What is an environment variable and what are they used for?

An environment variable is a variable outside of the application that stores configuration information. These variables are part of the environment in which a process runs, making them crucial for software applications to behave differently under various conditions without changes to the code.

**Uses of Environment Variables**:

- **Configuration**: Adjusting settings without altering the code, like database connection strings or API endpoints.
- **Secrets Management**: Storing sensitive data, such as API keys or passwords, safely outside the codebase.
- **Platform Identification**: Determining if the software is running in development, staging, or production environments.
- **Resource Pointers**: Directing software to use specific resources, like file paths or memory allocations.

By using environment variables, developers can maintain a consistent codebase across multiple setups, making software more portable and secure.

---

- What is TDD? What are some benefits and drawbacks?

**TDD** is a software development approach where tests are written before the actual code. The process involves:
1. Write a failing test for a new feature or function.
2. Write the minimal code to make the test pass.
3. Refactor the code while ensuring tests still pass.

**Benefits**:

- **Improved Code Quality**: Regular testing often leads to better-designed, cleaner, and more maintainable code.
- **Fewer Bugs**: Bugs are often caught early, reducing the cost and effort of fixing them later.
- **Enhanced Feedback**: Developers get immediate feedback on their code, aiding rapid iterations.
- **Easier Refactoring**: Changes can be made confidently, knowing tests will catch regressions.
  
**Drawbacks**:

- **Initial Time Investment**: Writing tests first can be time-consuming and might slow down initial development.
- **Learning Curve**: Teams unfamiliar with TDD might face a steep learning curve.
- **Overemphasis on Unit Tests**: There's a risk of focusing too much on unit tests and missing higher-level integration or end-to-end tests.

TDD promotes a structured and deliberate approach to coding, ensuring functionality aligns with requirements while catching issues early.

---

- What is the value of using JSONSchema for validation?

**JSONSchema** provides a clear and structured way to describe the format and structure of JSON data. By using JSONSchema:

- **Consistency**: Ensures data adheres to a predefined structure, leading to consistent data formats.
- **Automated Validation**: Reduces manual validation efforts by automatically checking JSON against the schema.
- **Self-documenting**: Serves as documentation for the expected JSON format, aiding developers and API users.
- **Flexibility**: Allows for complex validation rules, from data types to value constraints.

---
- What are some ways to decide which code to test?

1. **Risk Assessment**: Focus on high-impact areas like payment or security.
2. **Coverage Analysis**: Use tools to identify untested code.
3. **Business Critical Paths**: Test core application functionalities.
4. **Frequent Changes**: Test often-modified code to catch regressions.
5. **Complex Code**: Prioritize intricate logic or conditions.
6. **User Feedback**: Address areas where users report issues.
7. **Boundary Cases**: Test the edges of input and output ranges.
8. **External Dependencies**: Ensure code handling external systems is robust.

---

- What does `RETURNING` do in SQL? When would you use it?

**`RETURNING` in SQL**

The `RETURNING` clause in SQL retrieves values of columns after they've been inserted, updated, or deleted. It's primarily used in databases like PostgreSQL.

**When to Use**:

1. **Get IDs after Inserts**: Retrieve generated IDs (e.g., auto-incrementing primary keys) after inserting new rows.
2. **Audit Changes**: Capture the values of rows after updates or deletions for logging or auditing purposes.
3. **Optimization**: Avoid separate `SELECT` queries after a data modification, reducing database round-trips.

Using `RETURNING` can enhance efficiency and provide immediate feedback after data operations.

---

- What are some differences between Web Sockets and HTTP?

**Differences between Web Sockets and HTTP**

1. **Connection Type**:
   - **HTTP**: Stateless, request-response protocol. Each request opens a new connection.
   - **Web Sockets**: Persistent, full-duplex communication channel established once and kept open.

2. **Communication Direction**:
   - **HTTP**: Typically unidirectional; client sends request, server sends response.
   - **Web Sockets**: Bidirectional; both client and server can initiate communication.

3. **Use Cases**:
   - **HTTP**: Web page loading, API calls, stateless interactions.
   - **Web Sockets**: Real-time applications like chat, gaming, live sports updates.

4. **Overhead**:
   - **HTTP**: Each request/response has headers, creating overhead, especially for frequent interactions.
   - **Web Sockets**: After the initial handshake, data frames are lightweight.

5. **Ports**:
   - **HTTP**: Typically uses port 80 (or 443 for HTTPS).
   - **Web Sockets**: Typically uses port 80 (or 443 for WSS, the secure version).

Web Sockets offer real-time, two-way communication, while HTTP is more suited for stateless, intermittent communications.

---

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I prefer Flask. I just understand it better. Maybe because it was what I was taught first.