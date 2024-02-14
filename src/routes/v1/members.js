const { Router } = require("express");
const MembersRouter = Router();

let members = []; // Simulieren Sie eine Datenbank für Mitglieder

// Mitglieder hinzufügen
MembersRouter.post("/routes/v1/members", (req, res) => {
  const member = req.body;
  members.push(member);
  res.status(201).json({ addedMember: member });
});

// Mitglieder entfernen
MembersRouter.delete("/routes/v1/members/:id", (req, res) => {
  const { id } = req.params;
  members = members.filter((member) => member.id !== id);
  res.status(200).json({ removedMemberId: id });
});

// Mitglieder auslesen
MembersRouter.get("/routes/v1/members", (req, res) => {
  res.status(200).json({ members });
});

module.exports = { MembersRouter };
