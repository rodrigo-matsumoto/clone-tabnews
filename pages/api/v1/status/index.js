function index(request, response) {
  response.status(200).json({ chave: "Olá mundo!" });
}

export default index;
