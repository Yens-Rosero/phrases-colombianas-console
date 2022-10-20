const messages = [
    "Oiga usted es bien chismoso, ¿No?.",
    "A ver donde su abuelita.", //??
    "Entonces parce, ¿Ya trajo la chuspa?",
    "¡Uy!, este clima esta como para un tintico.",
    "¡Uy!, con eso me armaba un PC gamer.",
    "¿Cómo sería? De bajada, sin casco y de cabeza.",
    "Mi abuelo antes decia: \"¡Todo esto antes era monte!\"",
    "Estamos a la orden para el desorden.",
    "Duerme más que un gato con anemia.",
    "Esos dos son como uña y mugre.",
    "Habla hasta por los codos!",
    "Al que madruga, Dios lo ayuda.",
    "Sóbese que no hay pomada.",
    "¡Quite de hay!",
    "¡No se le ocurra!",
    "Váyase por la sombrita.",
    "Píntemela a ver y yo le digo cuántos pares son tres moscas.",
    "¿Y eso quién pidió pollo?",
    "¿Durmió conmigo anoche o qué, que no saluda?",
    "Ni que estuviéramos bravos.",
    "¡Nanay cucas!",
    "¡Lo visto pero no lo mantengo!",
    "Lo que le diga es mentira.",
    "¡Uuuuyyyyyyyy!, se nos creció el enano.",
    "¡Dele chancleta!",
    "!Pero, me extraña!",
    "¡Chaos!",
    "¡Quiubos!",
    "Esa hembra está mas arreglada que muchacha de servicio en domingo de misa.",
    "Me hace el favor y le baja al tonito.",
    "¡Aquí no se trabaja pero se goza!",
    "¡Jum!, ya dijo...",
    "Esa vieja es más fea que un carro por debajo.",
    "¿Cómo se llama tu nombre? ¿Dónde vive tu dirección?",
    "Hágase el marica y así se queda.",
    "¡Uysh!, que boleta.",
    "Uy mostro.",
    "Hierba mala nunca muere.",
    "Haga lo que se le de la gana.",
    "Todos en la cama o todos en el piso.",
];

const colombianadas = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
    colombianadas,
};
