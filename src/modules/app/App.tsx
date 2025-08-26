import React from 'react';
import { AppShell, Container, Group, Title, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

export function App() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Title order={3}>
            DND Starter
          </Title>
          <Group>
            <Button component={Link} to="/" variant="subtle">Home</Button>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Container>
          <Title order={2} mb="md">Добро пожаловать!</Title>
          <p>Заготовка проекта: React + TS + Webpack + React Router + Mantine.</p>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

