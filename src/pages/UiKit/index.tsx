import React, { useState } from 'react';
import ArrowGrayIcon from '../../assets/icons/arrowGray.svg';
import { Input } from '../../ui-kit/Input';
import { RadioGroup } from '../../ui-kit/RadioGroup';
import { DatePicker } from '../../ui-kit/DatePicker';
import { Textarea } from '../../ui-kit/TextField';
import {Button} from "../../ui-kit/Button";

interface FullSurveyData {
  childName: string;
  parentName: string;
  gender: 'male' | 'female' | null;
  birthDate: Date | null;
  happiness: 1 | 2 | 3 | 4 | 5 | null;
  specialNeeds: string;
  strengths: string;
}

function UiKit() {
  const [formData, setFormData] = useState<FullSurveyData>({
    childName: '',
    parentName: '',
    gender: null,
    birthDate: new Date(),
    happiness: null,
    specialNeeds: '',
    strengths: '',
  });

  const handleChange = <K extends keyof FullSurveyData>(
    name: K,
    value: FullSurveyData[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const genderOptions = [
    { label: 'Мужской', value: 'male' as const },
    { label: 'Женский', value: 'female' as const },
  ];

  const scaleOptions = [
    { label: 'Очень редко', value: 1 as const },
    { label: 'Редко', value: 2 as const },
    { label: 'Иногда', value: 3 as const },
    { label: 'Часто', value: 4 as const },
    { label: 'Всегда', value: 5 as const },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    console.log('Form data:', formData); // Выводим все данные в консоль
  };

  return (
    // 5. Оборачиваем все в один контейнер с отступами
    <div style={{ padding: '30px', maxWidth: '700px', margin: '0 auto' }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <Button icon={ArrowGrayIcon} iconPosition="left" width="200px">
          Кнопка иконка слева
        </Button>

        <Button icon={ArrowGrayIcon} >
          Кнопка иконка справа
        </Button>

        <Input
          id="childName"
          name="childName"
          label="Имя ребенка"
          value={formData.childName}
          onChange={(e) => handleChange('childName', e.target.value)}
        />

        <Input
          id="parentName"
          name="parentName"
          label="Имя родителя, заполняющего анкету"
          value={formData.parentName}
          onChange={(e) => handleChange('parentName', e.target.value)}
        />

        <RadioGroup
          label="Пол ребенка"
          name="gender"
          options={genderOptions}
          selectedValue={formData.gender}
          onChange={(value) =>
            handleChange('gender', value as 'male' | 'female')
          }
        />

        <RadioGroup
          label="Ребенок часто выражает радость и удовольствие:"
          name="happiness"
          options={scaleOptions}
          selectedValue={formData.happiness}
          onChange={(value) =>
            handleChange('happiness', value as 1 | 2 | 3 | 4 | 5)
          }
        />

        <DatePicker
          id="birthDate"
          label="Дата рождения ребенка"
          selectedDate={formData.birthDate}
          onChange={(date) => handleChange('birthDate', date)}
        />

        <Textarea
          id="specialNeeds"
          name="specialNeeds"
          label="Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?"
          value={formData.specialNeeds}
          onChange={(e) => handleChange('specialNeeds', e.target.value)}
        />

        <Textarea
          id="strengths"
          name="strengths"
          label="Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?"
          value={formData.strengths}
          onChange={(e) => handleChange('strengths', e.target.value)}
        />

        <Button type="submit">Отправить данные</Button>
      </form>
    </div>
  );
}

export default UiKit;
