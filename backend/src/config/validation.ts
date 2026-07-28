import { z } from "zod";

export const applySchema = z.object({
  name: z.string().min(2, "A név túl rövid").max(50, "A név túl hosszú"),

  phone: z.string().min(5, "Érvénytelen telefonszám").max(20, "A telefonszám túl hosszú"),

  email: z.email(),

  subject: z.string().min(2, "A tárgy túl rövid").max(100, "A tárgy túl hosszú"),

  message: z.string().min(5, "Az üzenet túl rövid").max(2000, "Az üzenet túl hosszú"),
});
