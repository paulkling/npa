docker build --rm -t npa .
docker run -p 3000:3000 --pid=host npa