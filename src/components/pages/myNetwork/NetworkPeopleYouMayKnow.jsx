import { useSelector } from "react-redux"
import NetworkProfileCard from "./NetworkProfilesCard"
import { Card, Row } from "react-bootstrap"
import { useState } from "react"

function NetworkPeopleYouMayKnow() {
  const profiles = useSelector((rs) => rs.profilo.usersData) || []

  const [randomProfiles] = useState(() => {
    if (!profiles.length) return []

    const maxStart = Math.max(0, profiles.length - 12)
    const start = Math.floor(Math.random() * (maxStart + 1))

    return profiles.slice(start, start + 12)
  })

  return (
    <Card className="p-2 shadow-sm rounded-3">
      <Card.Title className="fs-6">Persone che potresti conoscere</Card.Title>
      <Card.Body className="p-0">
        <Row className="g-2">
          {randomProfiles.map((profile) => (
            <NetworkProfileCard key={profile._id} profile={profile} />
          ))}
        </Row>
      </Card.Body>
    </Card>
  )
}

export default NetworkPeopleYouMayKnow
