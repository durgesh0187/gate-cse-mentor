questions = [
  {
    type: "MCQ",
    q: "Ravi had ______ younger brother who taught at ______ university. He was widely regarded as ______ honorable man. Select the option with the correct sequence of articles to fill in the blanks.",
    options: ["a; a; an", "the; an; a", "a; an; a", "an; an; a"],
    answer: [0],
    topic: "English Grammar"
  },
  {
    type: "MCQ",
    q: "The CEO’s decision to downsize the workforce was considered myopic because it sacrificed long-term stability to accommodate short-term gains. Select the most appropriate option that can replace the word “myopic” without changing the meaning of the sentence.",
    options: ["visionary", "shortsighted", "progressive", "innovative"],
    answer: [1],
    topic: "Vocabulary"
  },
  {
    type: "MCQ",
    q: "The average marks obtained by a class in an examination were calculated as 30.8. However, while checking the marks entered, the teacher found that the marks of one student were entered incorrectly as 24 instead of 42. After correcting the marks, the average becomes 31.4. How many students does the class have?",
    options: ["25", "28", "30", "32"],
    answer: [2],
    topic: "Average"
  },
  {
    type: "MCQ",
    q: "Consider the relationships among P, Q, R, S, and T:\n• P is the brother of Q.\n• S is the daughter of Q.\n• T is the sister of S.\n• R is the mother of Q.\nThe following statements are made based on the relationships given above:\n(1) R is the grandmother of S.\n(2) P is the uncle of S and T.\n(3) R has only one son.\n(4) Q has only one daughter.\nWhich one of the following options is correct?",
    options: ["Both (1) and (2) are true.", "Both (1) and (3) are true.", "Only (3) is true.", "Only (4) is true."],
    answer: [0],
    topic: "Logical Reasoning"
  },
  {
    type: "MCQ",
    q: "“I put the brown paper in my pocket along with the chalks, and possibly other things. I suppose every one must have reflected how primeval and how poetical are the things that one carries in one’s pocket: the pocket-knife, for instance the type of all human tools, the infant of the sword. Once I planned to write a book of poems entirely about the things in my pocket. But I found it would be too long: and the age of the great epics is past.”\nBased only on the information provided in the above passage, which one of the following statements is true?",
    options: [
      "The author of the passage carries a mirror in his pocket to reflect upon things.",
      "The author of the passage had decided to write a poem on epics.",
      "The pocket-knife is described as the infant of the sword.",
      "Epics are described as too inconvenient to write."
    ],
    answer: [2],
    topic: "Reading Comprehension"
  },
  {
    type: "MCQ",
    q: "A fair six-faced dice, with the faces labelled ‘1’, ‘2’, ‘3’, ‘4’, ‘5’, and ‘6’, is rolled thrice. What is the probability of rolling ‘6’ exactly once?",
    options: ["75/216", "1/6", "1/18", "25/216"],
    answer: [0],
    topic: "Probability"
  },
  {
    type: "MCQ",
    q: "A shop has 4 distinct flavors of ice-cream. One can purchase any number of scoops of any flavor. The order in which the scoops are purchased is inconsequential. If one wants to purchase 3 scoops of ice-cream, in how many ways can one make that purchase?",
    options: ["4", "20", "24", "48"],
    answer: [1],
    topic: "Combinatorics"
  },
  {
    type: "MCQ",
    q: "Suppose a program is running on a non-pipelined single processor computer system. The computer is connected to an external device that can interrupt the processor asynchronously. The processor needs to execute the interrupt service routine (ISR) to serve this interrupt. The following steps (not necessarily in order) are taken by the processor when the interrupt arrives:\n(i) The processor saves the content of the program counter.\n(ii) The program counter is loaded with the start address of the ISR.\n(iii) The processor finishes the present instruction.\nWhich ONE of the following is the CORRECT sequence of steps?",
    options: ["(iii), (i), (ii)", "(i), (iii), (ii)", "(i), (ii), (iii)", "(iii), (ii), (i)"],
    answer: [0],
    topic: "Computer Architecture"
  },
  {
    type: "MCQ",
    q: "Which ONE of the following statements is FALSE regarding the symbol table?",
    options: [
      "Symbol table is responsible for keeping track of the scope of variables.",
      "Symbol table can be implemented using a binary search tree.",
      "Symbol table is not required after the parsing phase.",
      "Symbol table is created during the lexical analysis phase"
    ],
    answer: [2],
    topic: "Compiler Design"
  },
  {
    type: "MCQ",
    q: "Which ONE of the following techniques used in compiler code optimization uses live variable analysis?",
    options: [
      "Run-time function call management",
      "Register assignment to variables",
      "Strength reduction",
      "Constant folding"
    ],
    answer: [1],
    topic: "Compiler Optimization"
  },
  {
    type: "MCQ",
    q: "Consider a demand paging memory management system with 32-bit logical address, 20-bit physical address, and page size of 2048 bytes. Assuming that the memory is byte addressable, what is the maximum number of entries in the page table?",
    options: ["2^21", "2^20", "2^22", "2^24"],
    answer: [0],
    topic: "Operating Systems"
  },
  {
    type: "MCQ",
    q: "A schedule of three database transactions T1, T2, and T3 is shown. Ri(A) and Wi(A) denote read and write of data item A by transaction Ti, i = 1,2,3. The transaction T1 aborts at the end. Which other transaction(s) will be required to be rolled back?\nR1(X) W1(Y) R2(X) R2(Y) R3(Y) ABORT(T1)",
    options: ["Only T2", "Only T3", "Both T2 and T3", "Neither T2 nor T3"],
    answer: [2],
    topic: "Databases"
  },
  {
    type: "MCQ",
    q: "Identify the ONE CORRECT matching between the OSI layers and their corresponding functionalities as shown.\n(a) Network layer (I) Packet routing\n(b) Transport layer (II) Framing and error handling\n(c) Datalink layer (III) Host to host communication",
    options: [
      "(a)-(I), (b)-(II), (c)-(III)",
      "(a)-(I), (b)-(III), (c)-(II)",
      "(a)-(II), (b)-(I), (c)-(III)",
      "(a)-(III), (b)-(II), (c)-(I)"
    ],
    answer: [1],
    topic: "Computer Networks"
  },
  {
    type: "MCQ",
    q: "g(.) is a function from A to B, f(.) is a function from B to C, and their composition defined as f(g(.)) is a mapping from A to C. If f(.) and f(g(.)) are onto (surjective) functions, which ONE of the following is TRUE about the function g(.)?",
    options: [
      "g(.) must be an onto (surjective) function.",
      "g(.) must be a one-to-one (injective) function.",
      "g(.) must be a bijective function, that is, both one-to-one and onto.",
      "g(.) is not required to be a one-to-one or onto function."
    ],
    answer: [3],
    topic: "Discrete Mathematics"
  },
  {
    type: "MCQ",
    q: "Let G be any undirected graph with positive edge weights, and T be a minimum spanning tree of G. For any two vertices, u and v, let d1(u, v) and d2(u, v) be the shortest distances between u and v in G and T, respectively. Which ONE of the options is CORRECT for all possible G, T, u and v?",
    options: [
      "d1(u, v) = d2(u, v)",
      "d1(u, v) ≤ d2(u, v)",
      "d1(u, v) ≥ d2(u, v)",
      "d1(u, v) ≠ d2(u, v)"
    ],
    answer: [1],
    topic: "Algorithms – Graphs"
  },
  {
    type: "MCQ",
    q: "Consider the following context-free grammar G, where S, A, and B are the variables (non-terminals), a and b are the terminal symbols, S is the start variable, and the rules of G are described as:\nS → aaB | Abb\nA → a | aA\nB → b | bB\nWhich ONE of the languages L(G) is accepted by G?",
    options: [
      "L(G) = {a²bⁿ | n ≥ 1} ∪ {aⁿb² | n ≥ 1}",
      "L(G) = {aⁿb²ⁿ | n ≥ 1} ∪ {a²ⁿbⁿ | n ≥ 1}",
      "L(G) = {aⁿbⁿ | n ≥ 1}",
      "L(G) = {a²ⁿb²ⁿ | n ≥ 1}"
    ],
    answer: [0],
    topic: "Theory of Computation"
  },
  {
    type: "MCQ",
    q: "Consider the following recurrence relation:\nT(n) = 2T(n – 1) + n² for n > 0, T(0) = 1.\nWhich ONE of the following options is CORRECT?",
    options: [
      "T(n) = Θ(n²·2ⁿ)",
      "T(n) = Θ(n²ⁿ)",
      "T(n) = Θ((log n)²·2ⁿ)",
      "T(n) = Θ(4ⁿ)"
    ],
    answer: [0],
    topic: "Algorithms – Recurrence Relations"
  },

  {
    type: "MSQ",
    q: "Consider the 3-way handshaking protocol for TCP connection establishment. Let the three packets exchanged during the connection establishment be denoted as P1, P2, and P3, in order. Which of the following option(s) is/are TRUE with respect to TCP header flags that are set in the packets?",
    options: [
      "P3: SYN = 1, ACK = 1",
      "P2: SYN = 1, ACK = 1",
      "P2: SYN = 0, ACK = 1",
      "P1: SYN = 1"
    ],
    answer: [1, 3],
    topic: "Computer Networks"
  },
  {
    type: "MSQ",
    q: "Consider the given system of linear equations for variables x and y, where k is a real-valued constant:\nx + ky = 1\nkx + y = -1\nWhich of the following option(s) is/are CORRECT?",
    options: [
      "There is exactly one value of k for which the system has no solution.",
      "There exist an infinite number of values of k for which the system has no solution.",
      "There exists exactly one value of k for which the system has exactly one solution.",
      "There exists exactly one value of k for which the system has an infinite number of solutions."
    ],
    answer: [0, 3],
    topic: "Linear Algebra"
  },
  {
    type: "MSQ",
    q: "Let X be a 3-variable Boolean function that produces output as ‘1’ when at least two of the input variables are ‘1’. Which of the following statement(s) is/are CORRECT, where a, b, c, d, e are Boolean variables?",
    options: [
      "X(a, b, X(c, d, e)) = X(X(a, b, c), d, e)",
      "X(a, b, X(a, b, c)) = X(a, b, c)",
      "X(a, b, X(a, c, d)) = (X(a, b, a) AND X(c, d, c))",
      "X(a, b, c) = X(a, X(a, b, c), X(a, c, c))"
    ],
    answer: [1, 3],
    topic: "Digital Logic"
  },
  {
    type: "MSQ",
    q: "The number −6 can be represented as 1010 in 4-bit 2’s complement representation. Which of the following is/are CORRECT 2’s complement representation(s) of −6?",
    options: [
      "10001010 in 8-bits",
      "11111010 in 8-bits",
      "1000000000001010 in 16-bits",
      "1111111111111010 in 16-bits"
    ],
    answer: [1, 3],
    topic: "Computer Organization"
  },
  {
    type: "MSQ",
    q: "Which of the following statement(s) is/are TRUE for any binary search tree (BST) having n distinct integers?",
    options: [
      "The maximum length of a path from the root node to any other node is (n − 1).",
      "An inorder traversal will always produce a sorted sequence of elements.",
      "Finding an element takes O(log2 n) time in the worst case.",
      "Every BST is also a Min-Heap"
    ],
    answer: [0, 1],
    topic: "Data Structures"
  },
  {
    type: "MSQ",
    q: "A regular language L is accepted by a non-deterministic finite automaton (NFA) with n states. Which of the following statement(s) is/are FALSE?",
    options: [
      "L may have an accepting NFA with < n states.",
      "L may have an accepting DFA with < n states.",
      "There exists a DFA with ≤ 2^n states that accepts L.",
      "Every DFA that accepts L has > 2^n states."
    ],
    answer: [3],
    topic: "Theory of Computation"
  },

  {
    type: "NAT",
    q: "A C program executes in a multiprogramming environment with I/O. A process enters the I/O queue during scanf and printf. How many times will it enter the ready queue during its lifetime (excluding first entry)?",
    answer: 21,
    topic: "Operating Systems + C Programming"
  },
  {
    type: "NAT",
    q: "Let S be the set of all ternary strings over {a, b, c}. Count the number of strings of length 5 that contain at least one occurrence of two consecutive same symbols like 'aa', 'bb', or 'cc'.",
    answer: 195,
    topic: "Theory of Computation"
  },
  {
    type: "NAT",
    q: "You pick one coin randomly from a box with 4 fair coins (P(H) = 0.5) and 1 fake coin (P(H) = 1). You toss the coin twice and get heads both times. What is the probability that the selected coin is fake?",
    answer: 0.5,
    topic: "Probability"
  },
  {
    type: "NAT",
    q: "The function fun() implements bubble sort. Given an array of 30 elements sorted in descending order, how many swaps are performed?",
    answer: 435,
    topic: "Algorithms"
  },
  {
    type: "NAT",
    q: "What is the output of the following C program?\n\n#include <stdio.h>\nvoid foo(int *p, int x){ *p = x; }\nint main(){ int *z; int a = 20, b = 25;\n z = &a;\n foo(z,b);\n printf(\"%d\",a);\n return 0;\n}",
    answer: 25,
    topic: "C Programming"
  },
  {
    type: "NAT",
    q: "A Min-Heap stores 32 keys. What is the height of the Min-Heap?",
    answer: 5,
    topic: "Data Structures"
  },
  {
    type: "MCQ",
    q: "Consider a memory system with 1M bytes of main memory and 16K bytes of cache memory. Assume that the processor generates 20-bit memory address, and the cache block size is 16 bytes. If the cache uses direct mapping, how many bits will be required to store all the tag values?",
    options: [
      "6 × 2^10",
      "8 × 2^10",
      "2^12",
      "2^14"
    ],
    answer: [0],
    topic: "Computer Organization"
  },
  {
    type: "MCQ",
    q: "A processor has 64 general-purpose registers and 50 distinct instruction types. An instruction is encoded in 32-bits. What is the maximum number of bits that can be used to store the immediate operand for the given instruction?",
    options: ["16", "20", "22", "24"],
    answer: [1],
    topic: "Computer Organization"
  },
  {
    type: "MCQ",
    q: "A computer has two processors M1 and M2... What will be the average waiting time of the processes in milliseconds?",
    options: ["9.00", "8.75", "6.50", "7.50"],
    answer: [0],
    topic: "Operating Systems"
  },
  {
    type: "MCQ",
    q: "Which ONE of the following tuple relational calculus queries returns the name of the players who play for the team having tname as 'MI'?",
    options: [
      "{ p.pname | p ∈ players ∧ ∃t (t ∈ teams ∧ p.tid = t.tid ∧ t.tname = 'MI') }",
      "{ p.pname | p ∈ teams ∧ ∃t (t ∈ players ∧ p.tid = t.tid ∧ t.tname = 'MI') }",
      "{ p.pname | p ∈ players ∧ ∃t (t ∈ teams ∧ t.tname = 'MI') }",
      "{ p.pname | p ∈ teams ∧ ∃t (t ∈ players ∧ t.tname = 'MI') }"
    ],
    answer: [0],
    topic: "Databases"
  },
  {
    type: "MCQ",
    q: "Let A be a 2 × 2 matrix as given. A = [1 1; 1 -1]. What are the eigenvalues of the matrix A^13?",
    options: ["1, -1", "2√2, -2√2", "4√2, -4√2", "64√2, -64√2"],
    answer: [3],
    topic: "Mathematics"
  },
  {
    type: "MCQ",
    q: "Which ONE of the following options is the CORRECT minimized Boolean expression for F(b3, b2, b1, b0) = Σ(0, 2, 4, 8, 10, 11, 12)?",
    options: [
      "b1'b0' + b2'b0' + b1b2b3",
      "b1'b0' + b2'b0'",
      "b2'b0' + b1b2b3",
      "b0'b2' + b3'"
    ],
    answer: [0],
    topic: "Digital Logic"
  },
  {
    "type": "NAT",
    "q": "Refer to the given 3-address code sequence. This code sequence is split into basic blocks. The number of basic blocks is ________.",
    "answer": [6],
    "topic": "Compiler Design"
  },
  {
    "type": "NAT",
    "q": "In the modified optimal page replacement algorithm where only next 4 page references can be predicted, how many page faults will occur for the sequence: 1, 3, 2, 4, 2, 3, 1, 2, 4, 3, 1, 4, with 3 initially empty frames?",
    "answer": [6],
    "topic": "Operating Systems"
  },
  {
    "type": "NAT",
    "q": "A 5-bit message is sent over a noisy channel with a 0.01 bit-flip probability. What is the probability that the message is delivered error-free? (Rounded to 3 decimal places)",
    "answer": [0.951],
    "topic": "Probability"
  },
  {
    "type": "NAT",
    "q": "Given P(x) = Cx^2 for 1 ≤ x ≤ 4, what is the probability that x lies between 2 and 3? (Rounded to 3 decimal places)",
    "answer": [0.301],
    "topic": "Probability and Statistics"
  },
  {
    "type": "NAT",
    "q": "Given an FSM with one input X and one output f, as per the provided state transition table, what is the minimum number of states required to realize this FSM?",
    "answer": [5],
    "topic": "Theory of Computation"
  },
  {
    "type": "NAT",
    "q": "What is the output of the C program using the recursive function foo to count the number of unequal adjacent elements in the array A[] = {0,1,2,2,2,0,0,1,1}?",
    "answer": [5],
    "topic": "C Programming"
  },
  {
    "type": "NAT",
    "q": "What value is printed by the function gate(14362) which removes every alternate digit starting from the most significant digit?",
    "answer": [46],
    "topic": "C Programming"
  },
  {
    "type": "NAT",
    "q": "In a double hashing scheme with h1(k) = k mod 11 and h2(k) = 1 + (k mod 7), keys inserted: 63, 50, 25, 79, 67, 24. Where does key 24 get stored?",
    "answer": [5],
    "topic": "Data Structures / Hashing"
  }
];