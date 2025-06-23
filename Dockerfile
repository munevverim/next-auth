# Temel imaj
FROM node:20-alpine

# Çalışma dizini oluştur
WORKDIR /app

# Bağımlılıkları kopyala ve yükle
COPY package*.json ./
RUN npm install

# Tüm dosyaları kopyala
COPY . .

# Build
RUN npm run build

# Uygulamayı başlat
CMD ["npm", "start"] 