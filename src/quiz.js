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

export default data;