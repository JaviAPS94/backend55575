import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'alex.pinaida.55575@gmail.com',
        pass: 'chacanjuowhnyeye'
    }
});

app.get('/mail', async(req, res) => {
    await transporter.sendMail({
        from: 'Coderhouse 55575',
        to: 'alex.pinaida94@gmail.com',
        subject: 'Correo de prueba 55575',
        html: `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Orden de Compra</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    margin: 20px;
                    padding: 20px;
                    background-color: #f4f4f4;
                    color: #333;
                }
        
                h1 {
                    color: #2c3e50;
                }
        
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                    background-color: #fff;
                }
        
                th, td {
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: left;
                }
        
                th {
                    background-color: #3498db;
                    color: #fff;
                }
        
                tr:nth-child(even) {
                    background-color: #ecf0f1;
                }
        
                .total {
                    font-weight: bold;
                    font-size: 18px;
                    color: #e74c3c;
                }
            </style>
        </head>
        <body>
            <h1>Orden de Compra</h1>
        
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Producto 1</td>
                        <td>2</td>
                        <td>$10.00</td>
                        <td>$20.00</td>
                    </tr>
                    <tr>
                        <td>Producto 2</td>
                        <td>1</td>
                        <td>$15.00</td>
                        <td>$15.00</td>
                    </tr>
                    <!-- Puedes agregar más filas según sea necesario -->
                </tbody>
            </table>
        
            <p class="total">Total: $35.00</p>
        </body>
        </html>`,
        // attachments: [{
        //     filename: 'dog.jpeg',
        //     path: './dog.jpeg',
        //     cid: 'dog'
        // }]
    })

    res.send('Correo enviado');
});

app.listen(8080);