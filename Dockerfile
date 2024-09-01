# Utilizar una imagen oficial de Python como base
FROM python:3.10-slim

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo de requerimientos y el archivo .env al directorio de trabajo
COPY requirements.txt ./
COPY .env ./

# Instalar las dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código fuente de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación correrá
EXPOSE 8000

# Comando para correr la aplicación utilizando Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
