const data = {
  categories: [
    // 🟢 EASY
    {
      level: "Easy",
      cards: [
        {
          cardId: 1,
          title: "DBMS Basics",
          questions: [
            { question: "What is DBMS?", options: ["Data Backup System","Database Management System","Data Mining System","None"], answer: "Database Management System" },
            { question: "Database is?", options: ["Collection of data","Programs","Files only","None"], answer: "Collection of data" },
            { question: "DBMS is used for?", options: ["Store data","Manage data","Retrieve data","All of the above"], answer: "All of the above" },
            { question: "Example of DBMS?", options: ["MySQL","Chrome","Windows","Linux"], answer: "MySQL" },
            { question: "RDBMS stands for?", options: ["Relational DBMS","Random DBMS","Remote DBMS","None"], answer: "Relational DBMS" },
            { question: "Data is stored in?", options: ["Tables","Files","Graphs","Trees"], answer: "Tables" },
            { question: "Row is called?", options: ["Tuple","Attribute","Column","Key"], answer: "Tuple" },
            { question: "Column is called?", options: ["Attribute","Tuple","Row","Field"], answer: "Attribute" },
            { question: "Schema means?", options: ["Structure","Data","Query","Index"], answer: "Structure" },
            { question: "Metadata means?", options: ["Data about data","Raw data","Null","None"], answer: "Data about data" }
          ]
        },

        {
          cardId: 2,
          title: "Keys Basics",
          questions: [
            { question: "Primary key is?", options: ["Unique identifier","Duplicate value","Null allowed","None"], answer: "Unique identifier" },
            { question: "Primary key allows NULL?", options: ["Yes","No","Sometimes","Depends"], answer: "No" },
            { question: "Foreign key is used to?", options: ["Link tables","Delete tables","Sort","None"], answer: "Link tables" },
            { question: "Candidate key is?", options: ["Possible primary key","Foreign key","Duplicate","None"], answer: "Possible primary key" },
            { question: "Super key is?", options: ["Uniquely identifies row","Column only","Index","None"], answer: "Uniquely identifies row" },
            { question: "Composite key?", options: ["Multiple columns","Single column","Foreign","None"], answer: "Multiple columns" },
            { question: "Alternate key?", options: ["Remaining candidate keys","Primary key","Foreign key","None"], answer: "Remaining candidate keys" },
            { question: "Unique key allows?", options: ["Unique values","Duplicates","Null only","None"], answer: "Unique values" },
            { question: "Foreign key refers to?", options: ["Primary key of another table","Same table","Column","None"], answer: "Primary key of another table" },
            { question: "Keys are used for?", options: ["Identification","Sorting","Deleting","None"], answer: "Identification" }
          ]
        },

        {
          cardId: 3,
          title: "SQL Basics",
          questions: [
            { question: "SQL stands for?", options: ["Structured Query Language","Simple Query Language","System Query Language","None"], answer: "Structured Query Language" },
            { question: "SELECT is used for?", options: ["Fetch data","Insert","Update","Delete"], answer: "Fetch data" },
            { question: "INSERT is used for?", options: ["Add data","Delete","Update","None"], answer: "Add data" },
            { question: "UPDATE is used for?", options: ["Modify data","Insert","Delete","None"], answer: "Modify data" },
            { question: "DELETE is used for?", options: ["Remove data","Add","Modify","None"], answer: "Remove data" },
            { question: "WHERE is used for?", options: ["Filtering","Sorting","Grouping","None"], answer: "Filtering" },
            { question: "ORDER BY is for?", options: ["Sorting","Filtering","Deleting","None"], answer: "Sorting" },
            { question: "GROUP BY is for?", options: ["Grouping","Sorting","Delete","None"], answer: "Grouping" },
            { question: "DISTINCT removes?", options: ["Duplicates","Rows","Columns","None"], answer: "Duplicates" },
            { question: "DDL stands for?", options: ["Data Definition Language","Data Delete Language","Data Design Language","None"], answer: "Data Definition Language" }
          ]
        },

        {
          cardId: 4,
          title: "Normalization",
          questions: [
            { question: "Normalization reduces?", options: ["Redundancy","Speed","Tables","None"], answer: "Redundancy" },
            { question: "1NF removes?", options: ["Repeating groups","Keys","Rows","None"], answer: "Repeating groups" },
            { question: "2NF removes?", options: ["Partial dependency","Full dependency","Keys","None"], answer: "Partial dependency" },
            { question: "3NF removes?", options: ["Transitive dependency","Partial dependency","Keys","None"], answer: "Transitive dependency" },
            { question: "Denormalization is?", options: ["Reverse of normalization","Normalization","Delete","None"], answer: "Reverse of normalization" },
            { question: "Redundancy means?", options: ["Duplicate data","Unique data","Sorted","None"], answer: "Duplicate data" },
            { question: "Anomaly means?", options: ["Data problem","Index","Key","None"], answer: "Data problem" },
            { question: "Insert anomaly?", options: ["Cannot insert data","Delete","Update","None"], answer: "Cannot insert data" },
            { question: "Update anomaly?", options: ["Wrong update","Insert","Delete","None"], answer: "Wrong update" },
            { question: "Delete anomaly?", options: ["Data loss","Insert","Update","None"], answer: "Data loss" }
          ]
        },

        {
          cardId: 5,
          title: "Transactions",
          questions: [
            { question: "Transaction is?", options: ["Set of operations","Table","Row","Column"], answer: "Set of operations" },
            { question: "ACID stands for?", options: ["Atomicity, Consistency, Isolation, Durability","None","All","SQL"], answer: "Atomicity, Consistency, Isolation, Durability" },
            { question: "COMMIT means?", options: ["Save","Undo","Delete","None"], answer: "Save" },
            { question: "ROLLBACK means?", options: ["Undo","Save","Delete","None"], answer: "Undo" },
            { question: "SAVEPOINT is?", options: ["Checkpoint","Delete","Insert","None"], answer: "Checkpoint" },
            { question: "Atomicity?", options: ["All or nothing","Partial","Delete","None"], answer: "All or nothing" },
            { question: "Consistency?", options: ["Valid state","Invalid","None","Delete"], answer: "Valid state" },
            { question: "Isolation?", options: ["Separate transactions","Join","None","Delete"], answer: "Separate transactions" },
            { question: "Durability?", options: ["Permanent","Temporary","None","Delete"], answer: "Permanent" },
            { question: "Transaction ensures?", options: ["Reliability","Speed","None","Delete"], answer: "Reliability" }
          ]
        }
      ]
    },

    // 🟡 MEDIUM
    {
      level: "Medium",
      cards: [
        {
          cardId: 1,
          title: "Relational Model",
          questions: [
            { question: "Relation is?", options: ["Table","Row","Column","Index"], answer: "Table" },
            { question: "Degree means?", options: ["Columns","Rows","Keys","None"], answer: "Columns" },
            { question: "Cardinality means?", options: ["Rows","Columns","Keys","None"], answer: "Rows" },
            { question: "Tuple is?", options: ["Row","Column","Table","Schema"], answer: "Row" },
            { question: "Attribute is?", options: ["Column","Row","Table","None"], answer: "Column" },
            { question: "Domain is?", options: ["Allowed values","Tables","Rows","None"], answer: "Allowed values" },
            { question: "NULL means?", options: ["Unknown","Zero","Empty","None"], answer: "Unknown" },
            { question: "Super key?", options: ["Unique row","Duplicate","None","Index"], answer: "Unique row" },
            { question: "Relation schema?", options: ["Structure","Data","Query","None"], answer: "Structure" },
            { question: "Primary key?", options: ["Unique identifier","Duplicate","Null","None"], answer: "Unique identifier" }
          ]
        },

        {
          cardId: 2,
          title: "SQL Advanced",
          questions: [
            { question: "HAVING is for?", options: ["Group filter","Row filter","Sort","Delete"], answer: "Group filter" },
            { question: "INNER JOIN?", options: ["Matching rows","All rows","Left","Right"], answer: "Matching rows" },
            { question: "LEFT JOIN?", options: ["All left","All right","Match only","None"], answer: "All left" },
            { question: "FULL JOIN?", options: ["All data","Left","Right","None"], answer: "All data" },
            { question: "LIKE used for?", options: ["Pattern","Sort","Delete","Join"], answer: "Pattern" },
            { question: "% means?", options: ["Multiple chars","Single","None","Null"], answer: "Multiple chars" },
            { question: "IN operator?", options: ["Multiple values","Join","Sort","None"], answer: "Multiple values" },
            { question: "BETWEEN?", options: ["Range","Sort","Join","None"], answer: "Range" },
            { question: "Alias?", options: ["Temp name","Delete","Sort","None"], answer: "Temp name" },
            { question: "GROUP BY?", options: ["Grouping","Sorting","Deleting","None"], answer: "Grouping" }
          ]
        },

        {
          cardId: 3,
          title: "Normalization Advanced",
          questions: [
            { question: "BCNF is stronger than?", options: ["3NF","2NF","1NF","None"], answer: "3NF" },
            { question: "FD means?", options: ["Functional dependency","File data","None","Foreign data"], answer: "Functional dependency" },
            { question: "Lossless decomposition?", options: ["No loss","Loss","Speed","None"], answer: "No loss" },
            { question: "Anomaly cause?", options: ["Redundancy","Index","Key","None"], answer: "Redundancy" },
            { question: "1NF requires?", options: ["Atomic values","Keys","Index","None"], answer: "Atomic values" },
            { question: "2NF removes?", options: ["Partial dependency","Transitive","None","Keys"], answer: "Partial dependency" },
            { question: "3NF removes?", options: ["Transitive","Partial","None","Keys"], answer: "Transitive" },
            { question: "Denormalization?", options: ["Reverse","Normalize","Delete","None"], answer: "Reverse" },
            { question: "Dependency preservation?", options: ["FD preserved","Deleted","None","Indexed"], answer: "FD preserved" },
            { question: "Redundancy?", options: ["Duplicate data","Unique","Sorted","None"], answer: "Duplicate data" }
          ]
        },

        {
          cardId: 4,
          title: "Transactions Advanced",
          questions: [
            { question: "Deadlock?", options: ["Circular wait","Speed","Index","None"], answer: "Circular wait" },
            { question: "Dirty read?", options: ["Uncommitted data","Clean data","None","Index"], answer: "Uncommitted data" },
            { question: "Locking used for?", options: ["Concurrency","Sorting","Delete","None"], answer: "Concurrency" },
            { question: "Shared lock?", options: ["Read only","Write","None","Delete"], answer: "Read only" },
            { question: "Timestamp ordering?", options: ["Concurrency","Index","None","Sort"], answer: "Concurrency" },
            { question: "Commit?", options: ["Save","Undo","Delete","None"], answer: "Save" },
            { question: "Rollback?", options: ["Undo","Save","Delete","None"], answer: "Undo" },
            { question: "Isolation?", options: ["No interference","Merge","None","Delete"], answer: "No interference" },
            { question: "ACID ensures?", options: ["Reliability","Speed","None","Delete"], answer: "Reliability" },
            { question: "Transaction unit?", options: ["Logical work","Table","Row","Column"], answer: "Logical work" }
          ]
        },

        {
          cardId: 5,
          title: "Indexing",
          questions: [
            { question: "Index improves?", options: ["Search","Delete","Insert","None"], answer: "Search" },
            { question: "B-Tree?", options: ["Indexing","Sorting","Delete","None"], answer: "Indexing" },
            { question: "Hashing?", options: ["Fast access","Sort","None","Delete"], answer: "Fast access" },
            { question: "Clustered index?", options: ["Data stored","Pointer","None","Sort"], answer: "Data stored" },
            { question: "Non-clustered?", options: ["Pointer","Data","None","Sort"], answer: "Pointer" },
            { question: "Primary index?", options: ["Primary key","Foreign","None","Sort"], answer: "Primary key" },
            { question: "File organization?", options: ["Sequential","Random","Indexed","All"], answer: "All" },
            { question: "Buffer?", options: ["Temporary storage","Index","None","Sort"], answer: "Temporary storage" },
            { question: "Disk storage?", options: ["Secondary","Primary","Cache","None"], answer: "Secondary" },
            { question: "Query optimization?", options: ["Performance","Speed","None","Delete"], answer: "Performance" }
          ]
        }
      ]
    },

    // 🔴 HARD
    {
      level: "Hard",
      cards: [
        {
          cardId: 1,
          title: "Concurrency Control",
          questions: [
            { question: "Deadlock detection?", options: ["Wait graph","Sort","Index","None"], answer: "Wait graph" },
            { question: "Serializability?", options: ["Correct execution","Speed","None","Delete"], answer: "Correct execution" },
            { question: "2PL?", options: ["Two phase locking","Single","None","Sort"], answer: "Two phase locking" },
            { question: "Strict 2PL?", options: ["Locks till commit","None","Sort","Delete"], answer: "Locks till commit" },
            { question: "Recoverability?", options: ["Safe transactions","None","Speed","Sort"], answer: "Safe transactions" },
            { question: "Cascading rollback?", options: ["Chain rollback","None","Sort","Delete"], answer: "Chain rollback" },
            { question: "Timestamp ordering?", options: ["Scheduling","Sort","None","Index"], answer: "Scheduling" },
            { question: "Lock granularity?", options: ["Level of lock","Speed","None","Sort"], answer: "Level of lock" },
            { question: "Starvation?", options: ["Indefinite wait","None","Sort","Delete"], answer: "Indefinite wait" },
            { question: "Concurrency control ensures?", options: ["Consistency","Speed","None","Delete"], answer: "Consistency" }
          ]
        },

        {
          cardId: 2,
          title: "Recovery System",
          questions: [
            { question: "ARIES is?", options: ["Recovery algorithm","Index","Sort","None"], answer: "Recovery algorithm" },
            { question: "Checkpoint?", options: ["Save state","Delete","Sort","None"], answer: "Save state" },
            { question: "Undo logging?", options: ["Rollback","Sort","None","Index"], answer: "Rollback" },
            { question: "Redo logging?", options: ["Reapply changes","None","Sort","Delete"], answer: "Reapply changes" },
            { question: "Shadow paging?", options: ["Recovery","Index","Sort","None"], answer: "Recovery" },
            { question: "Crash recovery?", options: ["Restore data","Delete","Sort","None"], answer: "Restore data" },
            { question: "Log buffer?", options: ["Temporary log","Index","None","Sort"], answer: "Temporary log" },
            { question: "Write ahead logging?", options: ["Log first","Data first","None","Sort"], answer: "Log first" },
            { question: "Recovery ensures?", options: ["Consistency","Speed","None","Delete"], answer: "Consistency" },
            { question: "Dirty page?", options: ["Modified page","Clean","None","Sort"], answer: "Modified page" }
          ]
        },

        {
          cardId: 3,
          title: "Advanced Indexing",
          questions: [
            { question: "B+ Tree leaf nodes store?", options: ["Data","Index only","None","Sort"], answer: "Data" },
            { question: "B Tree difference from B+?", options: ["Data in all nodes","Leaf only","None","Sort"], answer: "Data in all nodes" },
            { question: "Multilevel index?", options: ["Index of index","None","Sort","Delete"], answer: "Index of index" },
            { question: "Dense index?", options: ["Every record","Some","None","Sort"], answer: "Every record" },
            { question: "Sparse index?", options: ["Few entries","All","None","Sort"], answer: "Few entries" },
            { question: "Primary index works on?", options: ["Sorted file","Random","None","Sort"], answer: "Sorted file" },
            { question: "Secondary index?", options: ["Non-primary","Primary","None","Sort"], answer: "Non-primary" },
            { question: "Indexing improves?", options: ["Read speed","Insert speed","Delete","None"], answer: "Read speed" },
            { question: "Hash index limitation?", options: ["Range queries bad","Fast","None","Sort"], answer: "Range queries bad" },
            { question: "Composite index?", options: ["Multiple columns","Single","None","Sort"], answer: "Multiple columns" }
          ]
        },

        {
          cardId: 4,
          title: "Advanced DBMS Concepts",
          questions: [
            { question: "View is?", options: ["Virtual table","Real table","None","Sort"], answer: "Virtual table" },
            { question: "Trigger is?", options: ["Automatic action","Manual","None","Sort"], answer: "Automatic action" },
            { question: "Stored procedure?", options: ["Precompiled SQL","None","Sort","Delete"], answer: "Precompiled SQL" },
            { question: "Cursor?", options: ["Row pointer","Table","None","Sort"], answer: "Row pointer" },
            { question: "Materialized view?", options: ["Stored view","Virtual","None","Sort"], answer: "Stored view" },
            { question: "Query optimization?", options: ["Best plan","None","Sort","Delete"], answer: "Best plan" },
            { question: "Execution plan?", options: ["Query steps","None","Sort","Delete"], answer: "Query steps" },
            { question: "Schema level?", options: ["Structure","Data","None","Sort"], answer: "Structure" },
            { question: "Instance means?", options: ["Data snapshot","Schema","None","Sort"], answer: "Data snapshot" },
            { question: "Data independence?", options: ["Logical/physical separation","None","Sort","Delete"], answer: "Logical/physical separation" }
          ]
        },

        {
          cardId: 5,
          title: "Performance Tuning",
          questions: [
            { question: "Query tuning improves?", options: ["Performance","Storage","None","Sort"], answer: "Performance" },
            { question: "Normalization impact?", options: ["Reduces redundancy","Speed","None","Sort"], answer: "Reduces redundancy" },
            { question: "Denormalization improves?", options: ["Read speed","Write speed","None","Sort"], answer: "Read speed" },
            { question: "Index overhead?", options: ["Storage cost","Speed","None","Sort"], answer: "Storage cost" },
            { question: "Join optimization?", options: ["Faster joins","None","Sort","Delete"], answer: "Faster joins" },
            { question: "Query planner?", options: ["Chooses execution plan","None","Sort","Delete"], answer: "Chooses execution plan" },
            { question: "Cost based optimizer?", options: ["Chooses cheapest plan","None","Sort","Delete"], answer: "Chooses cheapest plan" },
            { question: "Cardinality affects?", options: ["Performance","None","Sort","Delete"], answer: "Performance" },
            { question: "Statistics in DBMS?", options: ["Data info","None","Sort","Delete"], answer: "Data info" },
            { question: "Buffer management helps?", options: ["Memory efficiency","None","Sort","Delete"], answer: "Memory efficiency" }
          ]
        }
      ]
    }
  ]
};

const CnData = {
  categories: [
    // 🟢 EASY
    {
      level: "Easy",
      cards: [
        {
          cardId: 1,
          title: "Basics of CN",
          questions: [
            { question: "Computer Network is?", options: ["Connected computers","Single system","Software","None"], answer: "Connected computers" },
            { question: "Internet is?", options: ["Network of networks","Single network","LAN","None"], answer: "Network of networks" },
            { question: "Protocol means?", options: ["Rules","Device","Cable","None"], answer: "Rules" },
            { question: "Data is sent in form of?", options: ["Packets","Files","Programs","None"], answer: "Packets" },
            { question: "Full form of LAN?", options: ["Local Area Network","Large Area Network","Long Area Network","None"], answer: "Local Area Network" },
            { question: "Full form of WAN?", options: ["Wide Area Network","Wireless Area Network","World Area Network","None"], answer: "Wide Area Network" },
            { question: "Topology means?", options: ["Structure","Speed","Protocol","None"], answer: "Structure" },
            { question: "Network device?", options: ["Router","Mouse","Keyboard","None"], answer: "Router" },
            { question: "Bandwidth means?", options: ["Data capacity","Speed","Signal","None"], answer: "Data capacity" },
            { question: "IP stands for?", options: ["Internet Protocol","Internal Protocol","Input Protocol","None"], answer: "Internet Protocol" }
          ]
        },

        {
          cardId: 2,
          title: "OSI Model",
          questions: [
            { question: "OSI has layers?", options: ["7","5","3","10"], answer: "7" },
            { question: "Top layer?", options: ["Application","Network","Data link","None"], answer: "Application" },
            { question: "Bottom layer?", options: ["Physical","Session","Transport","None"], answer: "Physical" },
            { question: "Transport layer does?", options: ["End to end","Routing","Framing","None"], answer: "End to end" },
            { question: "Network layer does?", options: ["Routing","Error","Flow","None"], answer: "Routing" },
            { question: "Data link layer?", options: ["Framing","Routing","Encryption","None"], answer: "Framing" },
            { question: "Physical layer?", options: ["Transmission","Routing","None","None"], answer: "Transmission" },
            { question: "Session layer?", options: ["Connection control","Routing","None","None"], answer: "Connection control" },
            { question: "Presentation layer?", options: ["Formatting","Routing","None","None"], answer: "Formatting" },
            { question: "Application layer?", options: ["User interface","Routing","None","None"], answer: "User interface" }
          ]
        },

        {
          cardId: 3,
          title: "TCP/IP Model",
          questions: [
            { question: "TCP/IP layers?", options: ["4","7","5","3"], answer: "4" },
            { question: "Top layer?", options: ["Application","Transport","Network","None"], answer: "Application" },
            { question: "Transport protocol?", options: ["TCP","IP","HTTP","None"], answer: "TCP" },
            { question: "IP is in?", options: ["Internet layer","Transport","None","None"], answer: "Internet layer" },
            { question: "HTTP is?", options: ["Application protocol","Transport","None","None"], answer: "Application protocol" },
            { question: "FTP used for?", options: ["File transfer","Email","Chat","None"], answer: "File transfer" },
            { question: "SMTP used for?", options: ["Email","File","Chat","None"], answer: "Email" },
            { question: "DNS used for?", options: ["Name to IP","IP to name","None","None"], answer: "Name to IP" },
            { question: "UDP is?", options: ["Connectionless","Connection","None","None"], answer: "Connectionless" },
            { question: "TCP is?", options: ["Connection oriented","Connectionless","None","None"], answer: "Connection oriented" }
          ]
        }
      ]
    },

    // 🟡 MEDIUM
    {
      level: "Medium",
      cards: [
        {
          cardId: 1,
          title: "IP Addressing",
          questions: [
            { question: "IPv4 size?", options: ["32 bit","64 bit","128 bit","None"], answer: "32 bit" },
            { question: "IPv6 size?", options: ["128 bit","32 bit","64 bit","None"], answer: "128 bit" },
            { question: "Class A range?", options: ["1-126","128-191","192-223","None"], answer: "1-126" },
            { question: "Class B range?", options: ["128-191","1-126","192-223","None"], answer: "128-191" },
            { question: "Class C range?", options: ["192-223","128-191","1-126","None"], answer: "192-223" },
            { question: "Loopback address?", options: ["127.0.0.1","192.168.1.1","None","None"], answer: "127.0.0.1" },
            { question: "Private IP?", options: ["192.168.x.x","8.8.8.8","None","None"], answer: "192.168.x.x" },
            { question: "Subnet mask?", options: ["Network/host split","IP","None","None"], answer: "Network/host split" },
            { question: "Broadcast address?", options: ["All hosts","Single","None","None"], answer: "All hosts" },
            { question: "IP used for?", options: ["Identification","Speed","None","None"], answer: "Identification" }
          ]
        },

        {
          cardId: 2,
          title: "Routing & Switching",
          questions: [
            { question: "Router works on?", options: ["Network layer","Physical","None","None"], answer: "Network layer" },
            { question: "Switch works on?", options: ["Data link","Network","None","None"], answer: "Data link" },
            { question: "Routing means?", options: ["Path selection","Speed","None","None"], answer: "Path selection" },
            { question: "Static routing?", options: ["Manual","Auto","None","None"], answer: "Manual" },
            { question: "Dynamic routing?", options: ["Automatic","Manual","None","None"], answer: "Automatic" },
            { question: "MAC address?", options: ["Physical address","IP","None","None"], answer: "Physical address" },
            { question: "ARP?", options: ["IP to MAC","MAC to IP","None","None"], answer: "IP to MAC" },
            { question: "RARP?", options: ["MAC to IP","IP to MAC","None","None"], answer: "MAC to IP" },
            { question: "Switch avoids?", options: ["Collision","Broadcast","None","None"], answer: "Collision" },
            { question: "Router avoids?", options: ["Broadcast","Collision","None","None"], answer: "Broadcast" }
          ]
        }
      ]
    },

    // 🔴 HARD
    {
      level: "Hard",
      cards: [
        {
          cardId: 1,
          title: "Advanced Protocols",
          questions: [
            { question: "HTTP works on port?", options: ["80","21","25","None"], answer: "80" },
            { question: "HTTPS port?", options: ["443","80","21","None"], answer: "443" },
            { question: "FTP port?", options: ["21","80","25","None"], answer: "21" },
            { question: "SMTP port?", options: ["25","21","80","None"], answer: "25" },
            { question: "DNS port?", options: ["53","80","21","None"], answer: "53" },
            { question: "TCP provides?", options: ["Reliability","Speed","None","None"], answer: "Reliability" },
            { question: "UDP provides?", options: ["Fast","Reliable","None","None"], answer: "Fast" },
            { question: "Congestion control?", options: ["Traffic control","Speed","None","None"], answer: "Traffic control" },
            { question: "Flow control?", options: ["Sender control","Routing","None","None"], answer: "Sender control" },
            { question: "Checksum?", options: ["Error detection","Routing","None","None"], answer: "Error detection" }
          ]
        }
      ]
    }
  ]
};
const osData = {
  categories: [
    // 🟢 EASY
    {
      level: "Easy",
      cards: [
        {
          cardId: 1,
          title: "OS Basics",
          questions: [
            { question: "Operating System is?", options: ["Interface between user and hardware","Application","Compiler","None"], answer: "Interface between user and hardware" },
            { question: "Example of OS?", options: ["Windows","MS Word","Chrome","None"], answer: "Windows" },
            { question: "Kernel is?", options: ["Core of OS","Application","Program","None"], answer: "Core of OS" },
            { question: "OS manages?", options: ["Resources","Files","Processes","All"], answer: "All" },
            { question: "Process is?", options: ["Program in execution","File","Thread","None"], answer: "Program in execution" },
            { question: "Thread is?", options: ["Lightweight process","Heavy process","Program","None"], answer: "Lightweight process" },
            { question: "CPU scheduling?", options: ["Process selection","Memory","File","None"], answer: "Process selection" },
            { question: "Time sharing?", options: ["Multiple users","Single user","None","None"], answer: "Multiple users" },
            { question: "Multiprogramming?", options: ["Multiple programs","Single","None","None"], answer: "Multiple programs" },
            { question: "System call?", options: ["OS service","User input","None","None"], answer: "OS service" }
          ]
        },

        {
          cardId: 2,
          title: "Memory Management",
          questions: [
            { question: "RAM is?", options: ["Volatile","Non-volatile","None","None"], answer: "Volatile" },
            { question: "ROM is?", options: ["Non-volatile","Volatile","None","None"], answer: "Non-volatile" },
            { question: "Paging?", options: ["Memory division","CPU","None","None"], answer: "Memory division" },
            { question: "Fragmentation?", options: ["Memory waste","CPU","None","None"], answer: "Memory waste" },
            { question: "Virtual memory?", options: ["Extra memory","RAM","None","None"], answer: "Extra memory" },
            { question: "Page fault?", options: ["Missing page","Error","None","None"], answer: "Missing page" },
            { question: "Segmentation?", options: ["Logical division","Physical","None","None"], answer: "Logical division" },
            { question: "Cache memory?", options: ["Fast memory","Slow","None","None"], answer: "Fast memory" },
            { question: "Thrashing?", options: ["Excess paging","CPU","None","None"], answer: "Excess paging" },
            { question: "Memory allocation?", options: ["Assign memory","Delete","None","None"], answer: "Assign memory" }
          ]
        }
      ]
    },

    // 🟡 MEDIUM
    {
      level: "Medium",
      cards: [
        {
          cardId: 1,
          title: "CPU Scheduling",
          questions: [
            { question: "FCFS?", options: ["First Come First Serve","Priority","None","None"], answer: "First Come First Serve" },
            { question: "SJF?", options: ["Shortest Job First","Longest","None","None"], answer: "Shortest Job First" },
            { question: "Round Robin?", options: ["Time slice","Priority","None","None"], answer: "Time slice" },
            { question: "Priority scheduling?", options: ["Priority based","Time","None","None"], answer: "Priority based" },
            { question: "Turnaround time?", options: ["Completion time","Start","None","None"], answer: "Completion time" },
            { question: "Waiting time?", options: ["Wait duration","CPU","None","None"], answer: "Wait duration" },
            { question: "Response time?", options: ["First response","End","None","None"], answer: "First response" },
            { question: "Preemptive?", options: ["Interrupt","No interrupt","None","None"], answer: "Interrupt" },
            { question: "Non-preemptive?", options: ["No interrupt","Interrupt","None","None"], answer: "No interrupt" },
            { question: "Throughput?", options: ["Processes completed","Time","None","None"], answer: "Processes completed" }
          ]
        }
      ]
    },

    // 🔴 HARD
    {
      level: "Hard",
      cards: [
        {
          cardId: 1,
          title: "Deadlock & Synchronization",
          questions: [
            { question: "Deadlock?", options: ["Circular wait","Speed","None","None"], answer: "Circular wait" },
            { question: "Mutex?", options: ["Lock","Unlock","None","None"], answer: "Lock" },
            { question: "Semaphore?", options: ["Signal","Lock","None","None"], answer: "Signal" },
            { question: "Critical section?", options: ["Shared code","Private","None","None"], answer: "Shared code" },
            { question: "Race condition?", options: ["Conflict","Safe","None","None"], answer: "Conflict" },
            { question: "Starvation?", options: ["Indefinite wait","Execution","None","None"], answer: "Indefinite wait" },
            { question: "Banker's algorithm?", options: ["Deadlock avoidance","Detection","None","None"], answer: "Deadlock avoidance" },
            { question: "Deadlock prevention?", options: ["Avoid condition","Allow","None","None"], answer: "Avoid condition" },
            { question: "Deadlock detection?", options: ["Find deadlock","Ignore","None","None"], answer: "Find deadlock" },
            { question: "Recovery?", options: ["Resolve deadlock","Ignore","None","None"], answer: "Resolve deadlock" }
          ]
        }
      ]
    }
  ]
};

const oopsData = {
  categories: [
    // 🟢 EASY
    {
      level: "Easy",
      cards: [
        {
          cardId: 1,
          title: "OOP Basics",
          questions: [
            { question: "OOP stands for?", options: ["Object Oriented Programming","Only Object Program","None","None"], answer: "Object Oriented Programming" },
            { question: "Class is?", options: ["Blueprint","Object","Function","None"], answer: "Blueprint" },
            { question: "Object is?", options: ["Instance of class","Blueprint","None","None"], answer: "Instance of class" },
            { question: "Encapsulation?", options: ["Data hiding","Inheritance","None","None"], answer: "Data hiding" },
            { question: "Inheritance?", options: ["Reuse","Hide","None","None"], answer: "Reuse" },
            { question: "Polymorphism?", options: ["Many forms","Single","None","None"], answer: "Many forms" },
            { question: "Abstraction?", options: ["Hide details","Show","None","None"], answer: "Hide details" },
            { question: "Constructor?", options: ["Initialize object","Delete","None","None"], answer: "Initialize object" },
            { question: "Destructor?", options: ["Destroy object","Create","None","None"], answer: "Destroy object" },
            { question: "Method?", options: ["Function in class","Variable","None","None"], answer: "Function in class" }
          ]
        }
      ]
    },

    // 🟡 MEDIUM
    {
      level: "Medium",
      cards: [
        {
          cardId: 1,
          title: "OOP Concepts",
          questions: [
            { question: "Overloading?", options: ["Same name diff params","Override","None","None"], answer: "Same name diff params" },
            { question: "Overriding?", options: ["Same function child","Parent","None","None"], answer: "Same function child" },
            { question: "Access specifier?", options: ["public/private","Loop","None","None"], answer: "public/private" },
            { question: "Friend function?", options: ["Access private","No access","None","None"], answer: "Access private" },
            { question: "Static keyword?", options: ["Shared","Private","None","None"], answer: "Shared" },
            { question: "This pointer?", options: ["Current object","Other","None","None"], answer: "Current object" },
            { question: "Virtual function?", options: ["Runtime polymorphism","Compile","None","None"], answer: "Runtime polymorphism" },
            { question: "Pure virtual?", options: ["Abstract class","Concrete","None","None"], answer: "Abstract class" },
            { question: "Interface?", options: ["Only declaration","Implementation","None","None"], answer: "Only declaration" },
            { question: "Dynamic binding?", options: ["Runtime","Compile","None","None"], answer: "Runtime" }
          ]
        }
      ]
    },

    // 🔴 HARD
    {
      level: "Hard",
      cards: [
        {
          cardId: 1,
          title: "Advanced OOP",
          questions: [
            { question: "Multiple inheritance?", options: ["Multiple parents","Single","None","None"], answer: "Multiple parents" },
            { question: "Diamond problem?", options: ["Ambiguity","Clear","None","None"], answer: "Ambiguity" },
            { question: "Virtual inheritance?", options: ["Solve diamond","Create","None","None"], answer: "Solve diamond" },
            { question: "Deep copy?", options: ["Copy values","Reference","None","None"], answer: "Copy values" },
            { question: "Shallow copy?", options: ["Copy reference","Value","None","None"], answer: "Copy reference" },
            { question: "Operator overloading?", options: ["Custom operator","Default","None","None"], answer: "Custom operator" },
            { question: "Polymorphism types?", options: ["Compile & Runtime","Single","None","None"], answer: "Compile & Runtime" },
            { question: "Binding types?", options: ["Static & Dynamic","Single","None","None"], answer: "Static & Dynamic" },
            { question: "Abstraction achieved by?", options: ["Abstract class","Variable","None","None"], answer: "Abstract class" },
            { question: "Encapsulation ensures?", options: ["Security","Speed","None","None"], answer: "Security" }
          ]
        }
      ]
    }
  ]
};


export default data;
export { CnData, osData, oopsData };