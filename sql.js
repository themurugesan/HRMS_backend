const sql = require('mssql');

// Configure the database connection
const config = {
    user: 'sa',
    password: 'Z1ech5up@9!55@121',
    server: '192.168.1.101', // e.g., localhost
    database: 'attendance',
    options: {
        encrypt: true, // for Azure SQL
        trustServerCertificate: true // change to true for local development
    }
};

const query = `
    SELECT TOP 2
        ID as employeeId, 
        isCheckIn, 
        datetime as eventtime 
    FROM 
        [attendance].[dbo].[atteninfo] 
    WHERE 
        device IN ('Entrance', 'Exit') 
        AND datetime >= DATEADD(DAY, -2, GETDATE()) 
    ORDER BY 
        datetime
    FOR JSON PATH;
`;

sql.connect(config)
    .then(pool => {
        return pool.request().query(query);
    })
    .then(result => {
        console.log(JSON.stringify(result.recordset, null, 4)); // Pretty-print the result
    })
    .catch(err => {
        console.error('Error:', err);
    });