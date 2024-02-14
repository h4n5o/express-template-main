const { Router } = require("express");
const MembersRouter = Router();

let members = [
  { id: 1, firstName: "Max", name: "Mustermann", birthDate: Date("1980-10-10") },
  { id: 2, firstName: "Erika", name: "Musterfrau", birthDate: Date("1990-10-10") },
  { id: 3, firstName: "John", name: "Doe", birthDate: Date("1970-01-10") },
  { id: 4, firstName: "Jane", name: "Doe", birthDate: Date("1980-10-23") }
];
// Simulieren Sie eine Datenbank für Mitglieder

// Mitglieder hinzufügen
MembersRouter.post("./src/routes/v1/members", (req, res) => {
  const member = req.body;
  members.push(member);
  res.status(201).json({ addedMember: member });
});

// Mitglieder entfernen
MembersRouter.delete("./src/routes/v1/members:id", (req, res) => {
  const { id } = req.params;
  members = members.filter((member) => member.id !== id);
  res.status(200).json({ removedMemberId: id });
});

// Mitglieder auslesen
MembersRouter.get("./src/routes/v1/members", (req, res) => {
  res.status(200).json({ members });
});

module.exports = { MembersRouter };
